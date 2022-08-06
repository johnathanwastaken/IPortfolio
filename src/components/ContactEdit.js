//

import { useSelector } from "react-redux";
import { getContactData } from "../app/contactSlice";

function ContactEdit() {
  const contactData = useSelector(getContactData);
  return (
    <div className="edit">
      <h1>Contact (edit)</h1>
      <div className="editrow">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          defaultValue={contactData.email}
        />
      </div>
      <div className="editrow">
        <label htmlFor="phone">Phone: </label>
        <input
          type="text"
          name="phone"
          id="phone"
          defaultValue={contactData.phone}
        />
      </div>
      <div className="editrow">
        <label htmlFor="instagram">Instagram: </label>
        <input
          type="text"
          name="instagram"
          id="instagram"
          defaultValue={contactData.instagram}
        />
      </div>
      <div className="editrow">
        <label htmlFor="facebook">Facebook: </label>
        <input
          type="text"
          name="facebook"
          id="facebook"
          defaultValue={contactData.facebook}
        />
      </div>
      <div className="editrow">
        <label htmlFor="github">Github: </label>
        <input
          type="text"
          name="github"
          id="github"
          defaultValue={contactData.github}
        />
      </div>
      <div className="editrow"></div>
    </div>
  );
}

export default ContactEdit;
