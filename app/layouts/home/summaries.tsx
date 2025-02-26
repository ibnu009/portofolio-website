"use client";
import React, { useState, useEffect } from "react";
import fetch from "@/app/utils/axios";
import Educations from "@/app/components/summaries/educations";
import Achievements from "@/app/components/summaries/achievement";
import Experiences from "@/app/components/summaries/experiences";

export default function Summaries() {
  const [exp, setExp] = useState([]);
  const [edu, setEdu] = useState([]);
  const [ach, setAch] = useState([]);

  const fetchAll = async () => {
    try {
      const resExp = await fetch.get("experience.json");
      setExp(resExp.data);
    } catch (e) {
      console.error(e);
    }
    try {
      const resEdu = await fetch.get("educations.json");
      setEdu(resEdu.data);
    } catch (e) {
      console.error(e);
    }
    try {
      const resAch = await fetch.get("achievement.json");
      setAch(resAch.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
      <Achievements data={ach} />
      <Educations data={edu} />
      <Experiences data={exp} />
    </div>
  );
}
