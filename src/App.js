import React, {Component} from 'react';
import mainImage from './assets/image/bg-contact-us.png';
import cardImage from './assets/image/image-card.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <div className = "app-background" style = {{paddingBottom : 50}}>
        <nav className = "navbar navbar-expand-lg navbar-dark sticky-top">
          <a className = "navbar-brand" href = "#">Doterb Store</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class = "collapse navbar-collapse" id = "collapsibleNavbar">
            <ul class = "navbar-nav">
              <li class = "nav-item">
                <a class = "nav-link" href = "#">Home</a>
              </li>
              <li class = "nav-item">
                <a class = "nav-link" href = "#">Product</a>
              </li>
              <li class = "nav-item">
                <a class = "nav-link" href = "#">About Us</a>
              </li>
              <li class = "nav-item">
                <a class = "nav-link" href = "#">Contact Us</a>
              </li>
              <li class = "nav-item">
                <a class = "nav-link" href = "#">Blog</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className = "container"  style = {{marginTop : 200}}>
          <div className = "row">
            <div className = "col-sm-5">
              <img src = {cardImage} className = "image-card" width = "100%" height = "100%" alt = "Image Card" />
            </div>
            <div className = "col-sm-7">
              <div className = "card-content">
                <h2>Contact Us</h2>
                <p>Contact us for a quote, help or anything.</p>
                <div className = "row" style = {{marginTop : 20}}>
                  <div className = "col-sm-4">
                    <h5>Address</h5>
                    <p>Jl. Batu Indah XI No 36a Bandung</p>
                  </div>
                  <div className = "col-sm-4">
                    <h5>Email</h5>
                    <p>info@doterb.com</p>
                  </div>
                  <div className = "col-sm-4">
                    <h5>Phone</h5>
                    <p>+6222-8730-7121</p>
                  </div>
                </div>
                <div className = "row">
                  <div className = "col-sm-12">
                    <h4>Get a quote</h4>
                  </div>
                    <form>
                      <div className = "row" style = {{marginLeft : 0}}>
                        <div className = "col-sm-6">
                          <label for = "name">Name</label>
                          <input className = "form-group" type = "name" class = "form-control" id = "name" name = "name" />
                        </div>
                        <div className = "col-sm-6">
                          <label for = "email">Email</label>
                          <input className = "form-group" type = "email" class = "form-control" id = "email" name = "email" />
                        </div>
                        <div className = "col-sm-12" style = {{marginTop : 10}}>
                          <label for = "messager">Messager</label>
                          <textarea className = "form-group" type = "messager" class = "form-control" id = "messager" name = "messager" />
                        </div>
                        <div className = "col-sm-12" style = {{marginTop : 15, float : "right"}}>
                          <button type="submit" class="btn">Submit</button>
                        </div>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className = "footer">
        <div className = "container-footer">
            <p className = "footer-brand" href = "#">Doterb Store</p>
        </div>
      </footer>
      </>
    );
  }
}

export default App;
