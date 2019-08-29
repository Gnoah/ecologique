import React from 'react';
import { MDBIcon,MDBInput} from "mdbreact";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 


class Atelier extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titre: '',
      titre1: '',
      description:'',
      description1:'',
      photo:''
    };

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
    data.append('titre1',this.state.titre1);
    data.append('id_user', localStorage.getItem('id_user'))
    data.append('description',this.state.description);
    data.append('description1',this.state.description1);
  
    fetch('http://localhost:8080/atelier', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ photo_produit: `http://localhost:8080/atelier/${body.photo_produit}` });
        console.log('ity ilay body.fil',body.photo_produit);
        
      });
    });
  }

  render() {
    return (
        <div>
          <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-10">
              <form  onSubmit={this.handleUploadImage}>
                  <p className="h4 text-center py-4" id="pdash">Nouvelle publication </p>
                  <div className="grey-text">
                    <div className="row">
                        <div className="col-md-6">
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
                        </div>
                        <div className="col-md-6">
                          <MDBInput
                              label="Title right"
                              group
                              type="text"
                              validate
                              success="right" value={this.state.value} onChange={this.onChange} name="titre1"
                              
                            />
                          <MDBInput
                            label="Description right"
                            group
                            type="text"
                            validate
                            success="right" value={this.state.value} onChange={this.onChange}  name="description1"
                            
                          />
                        </div>
                      </div>
                    </div>
                    
                     
                    <label className="btn btn-default btn-file" id="fichier">
                     Photo<input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo"   required/>
                  </label>
                  <div className="text-center">
                  <div className="text-center mt-4">
                <button className="btn btn-outline-warning" onClick={()=>{
                  confirmAlert({
                    customUI: () => {
                      return (
                        <div className='custom-ui'>
                          <h1>Valider l'ajout</h1>
                          <center></center><a href="/Admin" id="okajout" className="btn btn-primary">OK</a>
                        </div>
                      );
                    }
                  });
                }} type="submit" id="ajouter_boutton">
                  Ajouter
                  <MDBIcon icon="paper-plane" className="ml-2" />
                </button>
              </div>
              </div>
                </form>
              </div>
          </div>
      </div>
    );
  }
}

export default Atelier;
