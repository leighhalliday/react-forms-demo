import React from "react";

import "normalize.css";
import "./App.css";

import Controlled from "./Controlled";
import VanillaForm from "./VanillaForm";
import FormikForm from "./FormikForm";

export default function App() {
  return (
    <>
      <Controlled />
      <VanillaForm />
      <FormikForm />
    </>
  );
}
