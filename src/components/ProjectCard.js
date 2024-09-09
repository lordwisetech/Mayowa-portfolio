import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,linkUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
    {/* Wrapping the entire content inside an anchor tag to make it clickable */}
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="proj-imgbx" style={{ cursor: "pointer" }}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </a>
  </Col>
  )
}
