import { Button, Container, TextField } from "@sberdevices/ui";
import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import ApiQueries from "../ApiQueries";

import { tertiary, primary, accent } from "@sberdevices/plasma-tokens";
import {
  body1,
  Display3,
  Headline3,
  Body1,
  Body3,
  Body2,
} from "@sberdevices/ui/components/Typography";
import { Headline2 } from "@sberdevices/ui/components/Typography";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { IconDone, IconLock } from "@sberdevices/plasma-icons";
import { IconHouse } from "@sberdevices/plasma-icons";

import {
  MarkedList,
  MarkedItem,
  Card,
  CardBody,
  CardMedia,
  CardContent,
  TextBoxBigTitle,
  TextBoxBiggerTitle,
  TextBox,
  TextBoxSubTitle,
  CardParagraph1,
  CardHeadline1,
  Spinner,
} from "@sberdevices/ui";
import "./Workout.css";
import { Timer } from "../components/Timer";
const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Стоп</div>;
  }

  return (
    <div className="timer">
      {/* <div className="text">Remaining</div> */}
      <div className="value">{remainingTime}</div>
      {/* <div className="text">seconds</div> */}
    </div>
  );
};
var date = new Date();
var options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  timezone: "UTC",
};

const Workout = ({
  groupId,
  workoutExercises,
  setWorkoutExercises,
  description,
  name,
  userId,
  workOutStarted,
  setWorkOutStartet,
  achieves,
  setAchieves,
  iterChanged,
  assistant,
  iter,
  setIter,
  setGroupId,
  assistantType,
  setIterChanged
}) => {
  const history = useHistory();


 
  useEffect(() => {
    const fetchCategoriesAndSetCategories = async () => {
      const workoutsEx = await ApiQueries.getExircicesfromGroup(groupId);
      setWorkoutExercises(workoutsEx.data);
    };

    fetchCategoriesAndSetCategories();
    console.log("Workout useeffect");
  }, []);
  // useEffect(() => {
  //   if (iterChanged == 1) {
  //     setIter(iter + 1);
  //   } else if (iterChanged == 0) {
  //     setIter(iter - 1);
  //   }
    
  // }, [iterChanged]);

  useEffect(() =>{
   if(workoutExercises[iter]!=undefined){
    sayExircise(workoutExercises[iter].discription, workoutExercises[iter].discriptionJoy)
   }
  },[iter])
  useEffect(() => { 
    if (iter== workoutExercises.length && workoutExercises.length!=0) {
      console.log("iter", iter, " len", workoutExercises.length)
      const getUserAchieves = async () => {
        await ApiQueries.createProgressAchieve(
          userId,
          new Date(),
          true
        );
        var ach = await ApiQueries.getAchiviesFomUser(
          userId
        );
        setAchieves(ach.data);
      };
      getUserAchieves();
      assistant.current?.sendData({ action: { action_id: 'train_finish', parameters: {  } } });
    }
    if (iterChanged == 1) { 
        setIter(iter + 1); 
    } else if (iterChanged == 0) { 
      if(iter>0){
        setIter(iter - 1);
      } 
    } 
  }, [iterChanged]);

  const sayExircise = (off_title, title) => {
    assistant.current?.sendData({ action: { action_id: 'say', parameters: { "off_description":off_title,"description":title, "number":iter } } });
  };
  const [timeCount, tsetTimeCount] = useState();
  return !workOutStarted ? (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ flexDirection: "column" }}>
          <Headline2>{name}</Headline2>

          {workoutExercises ? (
            <MarkedList>
              {workoutExercises.map(({ _id, name }, i) => (
                <MarkedItem text={name} style={{ color: primary }}>
                  <IconDone size="xs" color={accent} />
                </MarkedItem>
              ))}
            </MarkedList>
          ) : (
            <Spinner />
          )}

          <br />
        </div>
        <div style={{ flexDirection: "column" }}>
          <Card style={{ width: "20rem" }}>
            <CardBody>
              <CardContent>
                <TextBox>
                  <TextBoxBigTitle>Описание</TextBoxBigTitle>
                  {/* <TextBoxSubTitle>10 минут</TextBoxSubTitle> */}
                  <CardParagraph1 style={{ marginTop: "0.75rem" }} lines={4}>
                    {description}
                  </CardParagraph1>
                  <TextBoxSubTitle>Подходит для всех</TextBoxSubTitle>
                </TextBox>
                <br />
                <Button
                 
                  onClick={() => {
                    if(workoutExercises[0].discriptionJoy!=undefined && workoutExercises[0].discription!=undefined){
                      sayExircise(workoutExercises[0].discription, workoutExercises[0].discriptionJoy)
                    setWorkOutStartet(true);
                    setIter(iter+1)
                  }}}
                >
                  Начать
                </Button>
              </CardContent>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  ) : (
    <div>
      {/* <Button
        onClick={() => {
          setWorkOutStartet(false);
        }}
      >
        Закончить
      </Button>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        На главную
      </Button> */}

      <Card style={{ marginBottom: "3rem" }}>
        <CardBody>
          <CardContent>
            {workoutExercises ? (
              <div>
                {iter == workoutExercises.length ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    <TextBoxBigTitle>Тренировка завершена</TextBoxBigTitle>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <div style={{ flexDirection: "column" }}>
                        <CardParagraph1>
                          {date.toLocaleString("ru", options)}{" "}
                        </CardParagraph1>
                        {/* <TextBoxSubTitle>Время выполнения</TextBoxSubTitle> */}
                      </div>

                      {workoutExercises ? (
                        <MarkedList>
                          {workoutExercises.map(({ _id, name }, i) => (
                            <MarkedItem text={name} style={{ color: primary }}>
                              <IconDone size="xs" color={accent} />
                            </MarkedItem>
                          ))}
                        </MarkedList>
                      ) : (
                        <Spinner />
                      )}
                    </div>
                    <br />
                    <Button
                      onClick={() => {
                        setWorkOutStartet(false);
                        setIter(-1);
                        setGroupId(2);
                        history.push("/");
                      }}
                    >
                      <IconHouse />
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextBoxBigTitle>
                        {workoutExercises[iter].name}
                      </TextBoxBigTitle>
                      <div style={{ marginTop: "0.5rem" }}>
                        <Timer
                          setIter={setIter}
                          timeCount={{ timeCount: workoutExercises[iter].time }}
                          iter={iter}
                          userId={userId}
                          workoutLength={workoutExercises.length}
                          setAchieves={setAchieves}
                          workoutExercises={workoutExercises}
                          sayExircise={sayExircise}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "row",
                      }}
                    >
                      <div class="wrapper exmp2">
                        <img src={workoutExercises[iter].photo} />
                      </div>
                      {/* <img
                          style={{
                            width: "auto",
                            heigh: "auto",
                            maxWidth: "500px",
                            borderRadius: "25px",
                          }}
                          src="https://chslovo.com/wp-content/uploads/2019/03/21-1.jpg"
                        /> */}

                      <div style={{ flexDirection: "column" }}>
                        <CardParagraph1 lines={5}>
                         
                         { assistantType == "joy" ?  workoutExercises[iter].discriptionJoy :  workoutExercises[iter].discription}
                        </CardParagraph1>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            view="primary"
                            size="s"
                            scaleOnInteraction={false}
                            outlined={false}
                            fullWidth
                            disabled={iter == 0}
                            style={{ marginTop: "1em", marginRight: "1em" }}
                            tabIndex={-1}
                            onClick={() => {
                              if(workoutExercises[iter-1]!=undefined){
                                //assistant.current?.sendData({ action: { action_id: 'say', parameters: { "description":workoutExercises[iter-1].discription, "number":iter } } });
                              }
                              console.log(workoutExercises);
                              setIter(iter - 1);
                            }}
                          >
                            Предыдущее
                          </Button>
                          <Button
                            view="primary"
                            size="s"
                            scaleOnInteraction={false}
                            outlined={false}
                            fullWidth
                            style={{ marginTop: "1em" }}
                            tabIndex={-1}
                            onClick={() => {
                              // if(workoutExercises[iter+1]!=undefined){
                              //   sayExircise(workoutExercises[iter+1].discription)
                              // }
                              //if(workoutExercises[iter+1]!=undefined){
                                //assistant.current?.sendData({ action: { action_id: 'say', parameters: { "description":workoutExercises[iter+1].discription, "number":iter } } });
                             // }
                             setIterChanged(1);
                            }}
                          >
                            Следующее
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Spinner />
              </div>
            )}
          </CardContent>
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter(Workout);
