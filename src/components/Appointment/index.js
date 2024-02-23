import React from "react";
import "components/Appointment/styles.scss";
//custom hook: 
import useVisualMode from "hooks/useVisualMode";
//components:
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";

  const { mode, history, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}

      {mode === SHOW && ( <Show
                            student={props.interview.student}
                            interviewer={props.interview.interviewer}
                            onDelete={() => console.log("CONFIRM")}
                            onEdit={() => console.log("EDIT")}
                          /> )}

    </article>
  );
}
