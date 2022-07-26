import { useRef } from 'react'

import Card from '../ui/Card'
import './NewMeetupForm.css'

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const adressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredAdress = adressInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAdress,
            description: enteredDescription,
        };
        props.onAddMeetup(meetupData);
    }
    return (<Card>
        <form className="form" onSubmit={submitHandler}>
            <div className="control">
                <label htmlFor="title">Meetup Title</label>
                <input type="text" className="form-control" required id="title" ref={titleInputRef} />
            </div>
            <div className="control">
                <label htmlFor="image">Meetup Image</label>
                <input type="url" className="form-control" required id="url" ref={imageInputRef} />
            </div>
            <div className="control">
                <label htmlFor="address">Meetup address</label>
                <input type="text" className="form-control" required id="adress" ref={adressInputRef} />
            </div>
            <div className="control">
                <label htmlFor="description">Description</label>
                <textarea id="description" className="form-control" required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className="actions">
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
    );

}

export default NewMeetupForm;