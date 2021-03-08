import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { AssistantCharacterType } from "@sberdevices/assistant-client";
import { darkJoy, darkEva, darkSber } from "@sberdevices/plasma-tokens/themes";
import { text, background, gradient } from "@sberdevices/plasma-tokens";
import { Container } from "@sberdevices/ui";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { sberBox } from "@sberdevices/plasma-tokens/typo";
import SportCalendar from "./pages/SportCalendar";
import { body1 } from "@sberdevices/ui/components/Typography";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Workout from "./pages/Workout";
import ApiQueries from "./ApiQueries";
import Choose from "./pages/Choose";
import { useHistory, withRouter } from "react-router-dom";
import {
  createSmartappDebugger,
  createAssistant,
  AssistantAppState,
} from "@sberdevices/assistant-client";
import { set } from "date-fns";
import { Spinner } from "@sberdevices/ui";

const AppStyled = styled.div`
  padding: 30px;
  ${body1}
`;
const TypoScale = createGlobalStyle(sberBox);
// const DocStyles = createGlobalStyle`
//     /* stylelint-disable-next-line selector-nested-pattern */
//     html {
//         color: ${text};
//         background-color: ${background};
//         background-image: ${gradient};
//         /** необходимо залить градиентом всю подложку */
//         min-height: 100vh;
//     }
// `;
// const Theme = createGlobalStyle(darkJoy);
//const assistant=null;
const ThemeBackgroundEva = createGlobalStyle(darkEva);
const ThemeBackgroundSber = createGlobalStyle(darkSber);
const ThemeBackgroundJoy = createGlobalStyle(darkJoy);

const DocStyles = createGlobalStyle`
  html {
    color: ${text};
    background-color: ${background};
    background-image: ${gradient};
    min-height: 100vh;
  }
`;

const initializeAssistant = (getState /*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTUxODYxMDYsImV4cCI6MTYxNTI3MjUwNiwidHlwZSI6IkJlYXJlciIsImp0aSI6ImVjOWM0NzY0LWZjNTUtNGMzOS05ZDE4LWJjYTFhYTg4N2QxZCIsInN1YiI6IjdkMTM4N2FhY2RiYjY0ZTMwNTE3ODQ3ZGVhNzgwMDNmMTA4NjE1YmNlZGIzNTlmYjhmNWJiMWVkOGI0OTU3ZmM1MzliZTkyNzAwNDI2Mjk4IiwiYXVkIjoiVlBTIn0.C_D9jvjqbX9Y2UNycRmnxfRjJULiHJm7qq3bPm5T6iREwX5671QmJFIAnL9nbYmPWZHaQ7BW6h5Wqo9nj9sbNR26J5wh16Sp1rm-SvRsInnV-MVpywrJI8Sr718osHHnZoW_GJm1gglE2a9p42YQ06joC2iIqRUZ3Gexi_NfjLSdtK2uKpTjaZWM0lu3xtIhSBNtxrgAWch9KHyp2WqqG0-Lw5Ccih9fw0HPj2QBpVTmMZfIiXBK_1dg9IxJzbf9KS1_QCBvbz_sqAevlXH4KR8u2akXarz_rfAjwdVheW7hyj13H5i9KMEmZ4q2A0f3wuky6jv73YgXhhYRlKSYGtViDO-uVREbO-Nd5EBK8D2lqcoGXHasJs6e6bomG3iks0e7F2Zg3UNugYC2Bbl_fxFHa7uQJN4THQpd3pIXVBwKHtqOdozwJn5IbgHgCO0_Em8v8ju5Q4SaGEgNZj8ZzE4WqK13dSgQBbrvmZihptiyVXNk4dSvvDP-7EZh3hI_mRvYpwcRPf8oCT2-xyEdHeA0E1KWrir0jWBsO0MKSEl3FkBSagyOC7Ewgbs4574L9ZojZcZXw5TNkkyabtx8em9Vve1l_rc_H6Pc_E2y365-8h6V8fQMhz-Lg0gkdbqKpL2_a_YtO6qZ2IAxOg8XrwVbAq_6A0NQ0lwExa5lVRI" ??
        "",
      initPhrase: `Запусти Бодрое утро`,
      getState,
    });
  }
  return createAssistant({ getState });
};

function App() {
  const [character, setCharacter] = useState("sber");

  
  var assistant = useRef();
  var workouts = useRef();
  var state = {
    notes: [],
  };
  //const [workouts, setWorkouts] = useState([]);

  const [workoutExercises, setWorkoutExercises] = useState([]);
  const [iter, setIter] = useState(0);
  const [userId, setUserId] = useState([]);
  const [workOutStarted, setWorkOutStartet] = useState(false);
  const [iterChanged, setIterChanged] = useState(-1);
  const [digit, setDigit] = useState(-1);
  const getStateForAssistant = () => {
    console.log("getStateForAssistant: this.state:", state);
    const state_ = {
      item_selector: {
        items: state.notes.map(({ id, title }, index) => ({
          number: index + 1,
          id,
          title,
        })),
      },
    };
    console.log("getStateForAssistant: state:", state);
    return state_;
  };

  const getData = async (Id) => {
    await ApiQueries.getProverkaUsersByUserId(Id).then((data) =>
      setDigit(data.data)
    );
  };

  const ChangePage = async (page) => {
    switch (page) {
      case "Calendar":
        history.push("/calendar");
        break;
      case "fastworkout":
        history.push("/calendar");
        break;
      case "choose_training":
        history.push("/choose");
        break;
      case "fast_training":
        history.push("/fastworkout");
        break;
      default:
        break;
    }
  };

  const history = useHistory();
  const ChooseTrain =  (train_name) => {
    train_name =
      train_name.charAt(0).toUpperCase() + train_name.slice(1).trim();
    console.log("WK", workouts.current);
    if (workouts.current.data != undefined) {
      workouts.current.data.map(({ _id, name, discription }, i) => {
        console.log("name", name);
        console.log("train_name", train_name);
        if (train_name == name.trim()) {
          //setWorkOutStartet(false)
          console.log("i", i);
          console.log("name", name);
          setGroupId(i + 1);
          setName(name);
          setDescription(discription);
          history.push("/fastworkout");
        }
      });
    }
  };

  const startTraining = async () => {
    setWorkOutStartet(true);
   // assistant.current?.sendData({ action: { action_id: 'say', parameters: { "description":title, "number":iter } } });
    //history.push("/fastworkout");
  };
  const changeExir = async (type) => { 
    switch (type) { 
      case "next": 
        setIterChanged(1); 
        break; 
      case "previous": 
        setIterChanged(0); 
        break; 
    } 
 
    setIterChanged(-1); 
  };

  const dispatchAssistantAction = async (action) => {
    console.log("dispatchAssistantAction", action);
    if (action) {
      switch (action.type) {
        case "character":
          setCharacter(action.character.id);
          // 'sber' | 'eva' | 'joy';
          break;
        case "show_calendar":
          ChangePage("Calendar");
          break;
        case "to_fast_training":
          setGroupId(0);
          ChangePage("fast_training");
          break;
        case "to_choose_training":
          ChangePage("choose_training");
          break;
        case "choose_train":
          ChooseTrain(action.data);
          break;
        case "start_train":
          startTraining();
          break;
        case "next_exircise":
          changeExir("next");
          break;
        case "previous_exircise":
          changeExir("previous");
          break;
        case "to_main":
          history.push("/");
          break;

        default:
          break;
      }
    }
  };
  const [achieves, setAchieves] = useState([]);
  
  useEffect(() => {
      assistant.current = initializeAssistant(() => getStateForAssistant());
      assistant.current.on("start", (event) => {
        console.log(`assistant.on(start)`, event);
      });

      assistant.current.on(
        "data",
        (event /*: any*/) => {
          if (event.type == "smart_app_data") {
            console.log("userId", event.user_id);
            if (event.user_id != undefined) {
              setUserId(event.user_id);
              getData(event.user_id);
              ApiQueries.createUser(userId);
            }
            const getUserAchieves = async () => {
              var ach = await ApiQueries.getAchiviesFomUser(event.user_id);
              setAchieves(ach.data);
            };
            getUserAchieves();
          }
          console.log(`assistant.on(data)`, event);
          const { action } = event;
          dispatchAssistantAction(action);
        },
        []
      );


    if (assistant.current != null) {
      console.log("Non null, send data");
    } else {
      console.log("Null");
    }
  }, []);

  useEffect(() =>{
    const fetchCategoriesAndSetCategories = async () => {
      const workout = await ApiQueries.getAllGroupsExercises();
      workouts.current =workout;
    };
    fetchCategoriesAndSetCategories();
  },[workouts])

  const [groupId, setGroupId] = useState(2);
  const [description, setDescription] = useState(
    "Облегченный вид утренней тренирровки позволит вам размять тело без особых силовых усилий"
  );
  const [name, setName] = useState("Быстрая тренировка");

  const SendDataToAssistant = async (action) => {
    assistant.current.sendData({
      action: { action_id: action, parameters: { } },
    });
  };
  const TochooseCat = async (action) => {
    assistant.current.sendData({
      action: { action_id: "chooseCategory", parameters: { } },
    });
  };

  return (
    <AppStyled>
      <DocStyles />
      <TypoScale />
      {(() => {
        switch (character) {
          case "sber":
            return <ThemeBackgroundSber />;
          case "eva":
            return <ThemeBackgroundEva />;
          case "joy":
            return <ThemeBackgroundJoy />;
          default:
            return;
        }
      })()}
      {/* {assistant.current ? ( */}
      <Switch>
        <Route path="/choose">
          <Choose
            setGroupId={setGroupId}
            setDescription={setDescription}
            setName={setName}
            workouts={workouts}
            SendDataToAssistant={SendDataToAssistant}
          />
        </Route>
        <Route path="/fastworkout">
          <Workout
            groupId={groupId}
            description={description}
            workoutExercises={workoutExercises}
            setWorkoutExercises={setWorkoutExercises}
            name={name}
            userId={userId}
            workOutStarted={workOutStarted}
            setWorkOutStartet={setWorkOutStartet}
            iterChanged={iterChanged}
            setAchieves={setAchieves}
            assistant={assistant}
            iter={iter}
            setIter={setIter}
            setGroupId={setGroupId}

          />
        </Route>
        <Route path="/calendar" exact>
          <SportCalendar userId={userId} digit={digit} />
        </Route>
        <Route path="/">
          <Main
            setGroupId={setGroupId}
            ToChooseCateg={TochooseCat}
            achieves={achieves}
          />
        </Route>
      </Switch>
      {/* ) : (
        <Container>
          <Spinner />
        </Container>
      )} */}
    </AppStyled>
  );
}
export default withRouter(App);