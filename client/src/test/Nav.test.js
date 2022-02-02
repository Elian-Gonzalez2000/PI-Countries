import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";

import Nav from "../components/Nav.js";

configure({ adapter: new Adapter() });

describe("<Nav />", () => {
  let nav;

  beforeEach(() => {
    nav = shallow(<Nav />);
    expect(isReact.classComponent(Nav)).toBeTruthy();
  });

  it('Debería renderizar tres <Link to="" />. El primero que vaya a "/", y el segundo a "/home" y otro que vaya a "/activity"', () => {
    // Podes importar el componente Link de react-router-dom.
    expect(nav.find(Link).length).toBeGreaterThanOrEqual(2);
  });

  it('Debería tener un Link con el texto "Home" que cambie la ruta hacia "/home"', () => {
    // El orden en el que se declaran los Links es importante!
    expect(nav.find(Link).at(1).prop("to")).toEqual("/home");
    expect(nav.find(Link).at(1).text()).toEqual("Home");
  });

  it('Debería tener un segundo Link, con texto "Create activity" y que cambie la ruta hacia "/activity"', () => {
    expect(nav.find(Link).at(2).prop("to")).toEqual("/activity");
    expect(nav.find(Link).at(2).text()).toEqual("Crear Actividad");
  });
});
