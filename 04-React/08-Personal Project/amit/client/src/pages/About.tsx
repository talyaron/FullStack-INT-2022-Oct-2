const About = () => {
  try {
    return (
      <div>
        <h1>About page</h1>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae sunt inventore tempora placeat explicabo expedita mollitia vel sed ipsa, perferendis veritatis odio deleniti nihil at voluptate illo aliquam, ducimus facere!</h2>
      </div>
    )
  } catch (error) {
    console.error(error)
    return null
  }

}

export default About