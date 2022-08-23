import React, { Fragment } from "react";

const Introduccion = () => {
  return (
    <div className="  h-screen  p-10 mr-60 row-auto">
      <h2 className="uppercase font-bold col-start-auto">
        Que es la tecnología?
      </h2>

      <p className="mt-3 grid-column-start">
        Según la RAE la tecnología es el conjunto de teorías y de técnicas que
        permiten el aprovechamiento práctico del conocimiento científico. Sin
        embargo, en esta revista nos enfocaremos en lo que son las tecnologías
        para el área IT.
      </p>
      <h3 className="font-bold mt-3">
        Entonces qué es la Tecnología informática?
      </h3>
      <p className="mt-3 ">
        "Es el estudio, diseño, desarrollo, innovación puesta en práctica, ayuda
        o gerencia de los sistemas informáticos computarizados, particularmente
        usos del software" (asociación de la Tecnología Informática de América).
        Hoy en día, el desarrollo de software es crucial para poder competir a
        nivel empresarial y, por lo tanto, no es una sorpresa que los Unicornios
        que tenemos hoy en Argentina sean todos de tecnología (Unicornio:
        Empresa que vale más de 1000 millones de dólares). Una tecnología de
        desarrollo de software es una herramienta que sirve para generar código,
        en otras palabras, es un entorno utilizado por los developers para la
        construcción, mantenimiento, modificación. Además, de apoyar y/o depurar
        otros programas y aplicaciones. 
      </p>
      <p className="mt-3">
        En el transcurso de esta revista veremos todo el ecosistema clave para poder desarrollar aplicaciones de calidad, viendo lenguajes, frameworks, entornos de desarrollo, bases de datos, siempre pensando con una cultura de DevOps. Si alguno de estos conceptos todavía no lo conoces, no te preocupes por eso que lo iremos viendo en el transcurso de la revista</p>
      <footer className="absolute inset-x-0 bottom-0 h-16 text-center text-xl fon-bold">
        <p className="">Autor: Ivo Stipicic</p>
        <p>
          <a href="ivo.stipicic@gmail.com">ivo.stipicic@gmail.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Introduccion;
