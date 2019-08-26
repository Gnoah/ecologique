import React from 'react';
import { MDBIcon,MDBCol,MDBInput,MDBCard, MDBCardBody} from "mdbreact";

class Modifatelier extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        titre: '',
        description:'',
        photo:''
    }
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
}

onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}
handleUploadImage(ev) {
  ev.preventDefault();

  const data = new FormData();
    data.append('photo', this.uploadInput.files[0]);
    data.append('titre',this.state.titre);
    data.append('description',this.state.description);

  fetch('http://localhost:8080/atelier/'+ this.props.match.params.id, {
    method: 'PUT',
    body: data,
  }).then((response) => {
      
    response.json().then((body) => {
      this.setState({ image: `http://localhost:8080/atelier/${body.photo_produit}` });
      console.log('photo eco :', body.photo_produit);

    });
  });
}

  render() {
    return (
        <div className="container-fluid"> 
        <div className="row">
         <div className="col-md-4">
         </div>
         <div className="col-md-4">
         <MDBCol md="12">
           <MDBCard width="50%">
             <MDBCardBody>
               <form  onSubmit={this.handleUploadImage}>
                 <p className="h4 text-center py-4" id="pdash">Modifier Publication</p>
                 <div className="grey-text">
                   <MDBInput
                     label="Titre"
                     group
                     type="text"
                     validate
                     success="right" value={this.state.value}  onChange={this.onChange} name="titre"
                     required
                   />
                   <MDBInput
                     label="Déscription"
                     group
                     type="text"
                     validate
                     success="right" value={this.state.value} onChange={this.onChange} name="description"
                     required
                   />
                   <label className="btn btn-default btn-file" id="fichier">
                    Image Publication<input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo"   required/>
                 </label>
                 </div>
                 <div className="text-center">
                 <div className="text-center mt-4">
               <button className="btn btn-outline-warning" type="submit" id="ajouter_boutton">
                    Modifier
                 <MDBIcon icon="paper-plane" className="ml-2" />
               </button>
             </div>
             </div>
               </form>
             </MDBCardBody>
           </MDBCard>
         </MDBCol>
         </div>
         <div className="col-md-4">

         </div>
        </div> 
     </div>

    );
  }
}

export default Modifatelier;