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
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTU3OTUwMDQsImV4cCI6MTYxNTg4MTQwNCwidHlwZSI6IkJlYXJlciIsImp0aSI6ImU4Y2FiMmVlLWRmZDAtNDZlZS1hZWVkLWI5Zjc5ZTNjNzBiNCIsInN1YiI6IjdkMTM4N2FhY2RiYjY0ZTMwNTE3ODQ3ZGVhNzgwMDNmMTA4NjE1YmNlZGIzNTlmYjhmNWJiMWVkOGI0OTU3ZmM1MzliZTkyNzAwNDI2Mjk4IiwiYXVkIjoiVlBTIn0.PcW2HcnsxaoPw5ZE4KZWqk8ewIakqI_CxG6vnz7iSx9nO79TNSg_N9ABozncde7XxAPzGAUgMDhw2lrkKm2Lyz8PpTFsVyaDumiXKl5qNDSL_kIlbOuWIY0bknQFRj-r_dh92fcGkqm79CwZUTMLlagAKIgYIlAnmBjjWDjJ_eonlp8fqtrVeAyUHwiy-f9DT07Hc05HeddGwkIKonVW-K6YoAtEpjrYEA3_HRt9q8OsPdqkTFxvCr2q9yXUwEjIuVjsUE10tFGfCRApIuvSwxR6YaSKH2HcUFun_t4XyKtovCucdme0KxcNnP-6xWfLFL8w9CF_7p2SHhgCknQt89iH0yWRI6MMzSQBtCQ1lRRl4rRjXwbx2n3ILSTC6OF8QhxcSDT2F9mPYbWEJ3vHu20u5_f_sRF-tHE1NfmrbLlPLioW6mmcrL7oYgKIfFd3zBz-Sw9-AlSBr4kNuV_CKGURxQGcsLgQimkhFW29IqC_EKgbfZRzbGR_me-1XECA4sTTiU-qcfF88-bAWL976Tb19SLw7lgqmi30v1Ov3oXdKyhCjqprkbdDjtqlVg6qQMcX3EZkyZyvrm-cJ8CGRoTH0WnzNrl3p820Min9Y_5VT4zbIogi8QTl28-aw84cXZasLFJtD0j0cobMsHvGPMsSzS34FoPS20ITDMi2Lbw" ??
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
  const [iter, setIter] = useState(-1);
  const [userId, setUserId] = useState([]);
  const [workOutStarted, setWorkOutStartet] = useState(false);
  const [iterChanged, setIterChanged] = useState(-1);
  const [digit, setDigit] = useState(-1);
  const [assistantType, setAssistantType] = useState("");
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
  const ChooseTrain = (train_name) => {
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
    setIter(0);
    setWorkOutStartet(true);
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
          setGroupId(2)
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
          if (event.sub != undefined) {
            setUserId(event.sub);
            getData(event.sub);
            ApiQueries.createUser(userId);
          } else if (event.user_id != undefined) {
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
        if (event.type == "character") {
          setAssistantType(event.character.id);
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

  useEffect(() => {
    const fetchCategoriesAndSetCategories = async () => {
      const workout = await ApiQueries.getAllGroupsExercises();
      workouts.current = workout;
    };
    fetchCategoriesAndSetCategories();
  }, [workouts]);

  const [groupId, setGroupId] = useState(2);
  const [description, setDescription] = useState(
    "Облегченный вид утренней тренировки. Позволит размять тело без сильных нагрузок на организм."
  );
  const [name, setName] = useState("Быстрая тренировка");

  const SendDataToAssistant = async (action) => {
    assistant.current.sendData({
      action: { action_id: action, parameters: {} },
    });
  };
  const TochooseCat = async (action) => {
    assistant.current.sendData({
      action: { action_id: "chooseCategory", parameters: {} },
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
      {true ? (
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
              assistantType={assistantType}
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
              setName={setName}
              setDescription={setDescription}
            />
          </Route>
        </Switch>
      ) : (
        <Container>
          <Spinner />
        </Container>
      )}
    </AppStyled>
  );
}
export default withRouter(App);
