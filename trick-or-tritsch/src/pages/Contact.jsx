const Contact = () => {
  return (
    <div className="adjust-height">
      <form className="contact-form">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-outline-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact