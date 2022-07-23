import React from 'react'
import ProjectItem from '../components/ProjectItem'
import EpicImage from '../assets/fall-guys-3.jpg'
import "../styles/Projects.css"

function Projects() {
  return (
    <div className="projects">
      <h1>-= projects =-</h1>
      <div className="projectList">
        <ProjectItem title="AniEmbed" image={EpicImage} description="ML-powered data analysis tools for MyAnimeList.net"/>
        <ProjectItem title="Eventi" image={EpicImage} description="Discord bot for organizing large community events"/>
        <ProjectItem title="HarmonyTools" image={EpicImage} description="A tool for analyzing and writing classical harmony"/>
        <ProjectItem title=""/>
        <ProjectItem title=""/>
        <ProjectItem title=""/>
      </div>
    </div>
  )
}

export default Projects