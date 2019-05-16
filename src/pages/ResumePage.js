import React, { Component } from 'react';
import firebase from '../components/Firebase';
import Loading from '../components/Loading';
import _ from 'lodash';
import jsPDF from 'jspdf';
import encodedFonts from '../data/encoded_fonts';

class ResumePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resumeData: {},
      loading: true
    }
  }

  componentDidMount = () => {
    firebase.getResume()
        .then(resume => this.setState({
          resumeData: resume.data(),
          loading: false
        }));
  }

  render = () => {
    const { resumeData, loading } = this.state;

    return (
      <article className="resume app__content">
        <Loading loading={loading} />
        <div className="resume__heading">
          <h1>Overview</h1>
          <button onClick={this.generatePdf}>Download</button>
        </div>

        <p>{_.get(resumeData, 'overview')}</p>
        <h2>Experience</h2>
        <ul className="resume__experience">
          {_.get(resumeData, 'experience', []).map(this.renderExperience)}
        </ul>
        <h2>Education</h2>
        <ul className="resume__education">
          {_.get(resumeData, 'education', []).map(this.renderEducation)}
        </ul>
        <h2>Community</h2>
        <ul className="resume__community">
          {_.get(resumeData, 'community', []).map(this.renderCommunity)}
        </ul>
      </article>
    )
  }

  renderExperience = (experienceItem, key) => (
    <li className="resume__experience-item" key={key}>
      <div className="resume__experience-item-title">
        <div className="resume__list-bullet resume__list-bullet--outer">
          <div className="resume__list-bullet resume__list-bullet--inner"></div>
        </div>
        <h3>
          {experienceItem.company}
        </h3>
      </div>
      <div className="resume__experience-item-content">
        <p>{experienceItem.title}</p>
        <p>{experienceItem.start} - {experienceItem.end}</p>
        <p>{_.get(experienceItem, 'technologies', []).join(', ')}</p>
        <ul>
          {_.get(experienceItem, 'responsabilities', []).map(this.renderExtraInfo)}
        </ul>
      </div>
    </li>
  )

  renderEducation = (educationItem, key) => (
    <li className="resume__education-item" key={key}>
      <div className="resume__education-item-title">
        <div className="resume__list-bullet resume__list-bullet--outer">
          <div className="resume__list-bullet resume__list-bullet--inner"></div>
        </div>
        <h3>
          {educationItem.institution}
        </h3>
      </div>
      <div className="resume__education-item-content">
        <p>{educationItem.title}</p>
        <p>{educationItem.start} - {educationItem.end}</p>
        <ul>
          {_.get(educationItem, 'extras', []).map(this.renderExtraInfo)}
        </ul>
      </div>
    </li>
  )

  renderCommunity = (communityItem, key) => (
    <li className="resume__community-item" key={key}>
      <div className="resume__community-item-title">
        <div className="resume__list-bullet resume__list-bullet--outer">
          <div className="resume__list-bullet resume__list-bullet--inner"></div>
        </div>
        <h3>
          {communityItem.role}
        </h3>
      </div>
      <div className="resume__community-item-content">
        <p>{communityItem.description}</p>
        <p>{_.get(communityItem, 'dates', []).join(' - ')}</p>
        <ul>
          {_.get(communityItem, 'events', []).map(this.renderEvents)}
        </ul>
      </div>
    </li>
  )

  renderExtraInfo = (extraItem, key) => (
    <li key={key}>
      {extraItem}
    </li>
  )

  renderEvents = (event, key) => (
    <li className="resume__community-item-extra" key={key}>
      {event.title} <a href={event.link.url} target="_blank" rel="noopener noreferrer">{event.link.text}</a>
    </li>
  )

  generatePdf = () => {
    const pdf = new jsPDF();
    const { resumeData } = this.state;
    const margin = 15;
    const width = 210;
    const maxWidth = width - 2 * margin;
    let yPosition = margin;

    // Adding fonts
    pdf.addFileToVFS('Dosis-Bold-bold.ttf', encodedFonts.dosis_bold);
    pdf.addFont('Dosis-Bold-bold.ttf', 'Dosis-Bold', 'bold');
    pdf.addFileToVFS('Economica-normal.ttf', encodedFonts.economica_regular);
    pdf.addFont('Economica-normal.ttf', 'Economica', 'normal');

    // Starts pdf
    pdf.setFontSize(20);
    pdf.setFont('Dosis-Bold', 'bold');
    pdf.text(15, yPosition, 'Sebastián Alarcón Ramos');
    yPosition += 75

    // Overview section
    pdf.setFontSize(18);
    pdf.text(15, yPosition, 'Overview');
    pdf.setFont('Economica', 'normal');
    pdf.setFontSize(16);
    yPosition += 10;
    const overviewLines = pdf.splitTextToSize(resumeData.overview, maxWidth);
    pdf.text(15, yPosition, overviewLines);
    yPosition += 15

    // Experience section
    pdf.setFontSize(18);
    pdf.setFont('Dosis-Bold', 'bold');
    pdf.text(15, yPosition, 'Experience')
    yPosition += 15;

    // Each Experience item
    _.get(resumeData, 'experience', []).map(experienceItem => {
      pdf.setFontSize(16);
      pdf.setFont('Dosis-Bold', 'bold');
      pdf.setLineWidth(1);
      pdf.setDrawColor(20, 56, 80);
      pdf.setFillColor(255, 255, 255);
      pdf.circle(18, yPosition-2, 3, 'FD');
      pdf.setFillColor(20, 56, 80);
      pdf.circle(18, yPosition-2, 0.5, 'FD');
      pdf.text(25, yPosition, experienceItem.company);
      yPosition += 8;
      pdf.setFont('Economica', 'normal');
      pdf.setFontSize(14);
      pdf.text(25, yPosition, experienceItem.title);
      yPosition += 6;
      pdf.text(25, yPosition, `${experienceItem.start} - ${experienceItem.end}`);
      yPosition += 6;
      pdf.text(25, yPosition, _.get(experienceItem, 'technologies', []).join(', '));
      yPosition += 10;

      _.get(experienceItem, 'responsabilities', []).map(responsability => {
        pdf.circle(27, yPosition-1.5, 0.5, 'FD');
        pdf.text(30, yPosition, responsability);
        yPosition += 6;
      });

      yPosition += 9;
    });

    // Education section
    pdf.setFont('Dosis-Bold', 'bold');
    pdf.setFontSize(18);
    pdf.text(15, yPosition, 'Education');
    yPosition += 15;

    _.get(resumeData, 'education', []).map(educationItem => {
      pdf.setFontSize(16);
      pdf.setFont('Dosis-Bold', 'bold');
      pdf.setLineWidth(1);
      pdf.setDrawColor(20, 56, 80);
      pdf.setFillColor(255, 255, 255);
      pdf.circle(18, yPosition-2, 3, 'FD');
      pdf.setFillColor(20, 56, 80);
      pdf.circle(18, yPosition-2, 0.5, 'FD');
      pdf.text(25, yPosition, educationItem.institution);
      yPosition += 8;
      pdf.setFont('Economica', 'normal');
      pdf.setFontSize(14);
      pdf.text(25, yPosition, educationItem.title);
      yPosition += 6;
      pdf.text(25, yPosition, `${educationItem.start} - ${educationItem.end}`);
      yPosition += 10;

      _.get(educationItem, 'extras', []).map(extra => {
        pdf.circle(27, yPosition-1.5, 0.5, 'FD');
        pdf.text(30, yPosition, extra);
        yPosition += 6;
      });

      yPosition += 9;
    });


    // Community section
    pdf.setFont('Dosis-Bold', 'bold');
    pdf.setFontSize(18);
    pdf.text(15, yPosition, 'Community');
    yPosition += 15;

    _.get(resumeData, 'community', []).map(communityItem => {
      pdf.setFontSize(16);
      pdf.setFont('Dosis-Bold', 'bold');
      pdf.setLineWidth(1);
      pdf.setDrawColor(20, 56, 80);
      pdf.setFillColor(255, 255, 255);
      pdf.circle(18, yPosition-2, 3, 'FD');
      pdf.setFillColor(20, 56, 80);
      pdf.circle(18, yPosition-2, 0.5, 'FD');
      pdf.text(25, yPosition, communityItem.role);
    })

    pdf.save("pdf");
  }
}

export default ResumePage;
