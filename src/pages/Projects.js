import React from 'react'
import ProjectItem from '../components/ProjectItem'
import EpicImage from '../assets/fall-guys-3.jpg'
import EventiBanner from '../assets/EventiBanner.png'
import AniEmbed from '../assets/aniembed.jpg'
import "../styles/Projects.css"

function Projects() {
  return (
    <div className="projects">
      <h1>projects</h1>
      <div className="projectList">
        <ProjectItem title="Eventi" image={EventiBanner} description="Discord bot for organizing large community events"
          longDescription="Eventi is a Discord bot that expands the platform's built-in events function, seamlessly integrating it with text channels and more. That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really That is really "/>
        <ProjectItem title="AniEmbed" image={AniEmbed} description="ML-powered data analysis tools for MyAnimeList.net"
          longDescription=""/>
        <ProjectItem title="Art Portfolio" image={EpicImage} description="A website to present visual artwork"
          longDescription=""/>
        <ProjectItem title="About this site"/>
      </div>
    </div>
  )
}

export default Projects