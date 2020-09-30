import { contactInfo } from '../../public/staticInfo'

const Contact = () => {

  const contacts = contactInfo.map( (contact, ind) => (
    <div className="p-4" key={ind}>
      <div className="h-12 w-12 mx-auto">
        { contact.icon }
      </div>
      <div className="pt-2 text-center text-teal-500 font-bold truncate">
        { contact.link ? <a href={ contact.link }>{ contact.text }</a> : contact.text }
      </div>
    </div>
  ))

  return (
    <div id="contact" className="p-8 flex-col flex-wrap items-center justify-center">
      <div>
        <p className="text-4xl font-bold text-center">Contact</p>
        <hr className="mx-auto"/>
      </div>
      <div className="flex flex-col sm:flex-row justify-around p-4">
        { contacts }
      </div>
    </div>
  )
}

export default Contact