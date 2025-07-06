import React from "react";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Anant from "../components/anant";
import StatementSection from "../components/statement-section";
import CanvasSection from "../components/canvas-section";
import DesignProcess from "../components/design-process";
import Role from "../components/role";
import Discover from "../components/discover";
import Research from "../components/research";
import ResearchObjective from "../components/research-objective";
import Segment from "../components/segment";
import Analysis from "../components/analysis";
import Define from "../components/define";
import Personas from "../components/personas";
import Empathy from "../components/empathy";
import EmpathyMapping from "../components/empathy-mapping";
import DesignFrame from "../components/design-frame";
import WireFrame from "../components/wireframe";
import WireFrameScreen from "../components/wireframe-screen";
import Develop from "../components/develop";
import Colors from "../components/colors";
import ColorIntern from "../components/color-intern";
import MobileSection from "../components/mobile-section";

function HomeSection() {
  return (
    <div>
      <Hero />
      <Overview />
      <Anant />
      <StatementSection />
      <CanvasSection />
      <DesignProcess />
      <Role />
      <Discover />
      <Research />
      <ResearchObjective />
      <Segment />
      <Analysis />
      <Define />
      <Personas />
      <Empathy />
      <EmpathyMapping />
      <DesignFrame />
      <WireFrame />
      <WireFrameScreen />
      <Develop />
      <Colors />
      <ColorIntern />
      <MobileSection />
    </div>
  );
}

export default HomeSection;
