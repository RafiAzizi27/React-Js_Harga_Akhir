import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      harga: 0,  
      ppn: 0,
      diskon: 0,
      
    }
  }
  hargaAwal = (event) => {
    this.setState({harga: event.target.value});
  }
  ppn = (event) => {
    this.setState({pajak: (event.target.value / 100) * this.state.harga});
  }
  diskon = (event) => {
    this.setState({diskon: (event.target.value / 100) * this.state.harga});
  }
  hitung = () => {
    this.setState({hargaAkhir: this.state.harga  - this.state.diskon + this.state.pajak});
  }
  render(){
    return (
      <div className="container text-center">
        <div className="row mt-4">
          <div className="col bg-dark">
            <h5 className="fw-bold p-4 putih">Hitung Harga Akhir</h5>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label putih text-start">Harga Awal</label>
              <div class="col-sm-10">
                <input type="number" class="form-control" placeholder="Masukkan harga barang yang dibeli" onChange={this.hargaAwal} />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label putih text-start">PPN (%)</label>
              <div class="col-sm-10">
                <input type="number" class="form-control" placeholder="Masukkan ppn barang yang dibeli (%)" onChange={this.ppn} />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label putih text-start">Diskon (%)</label>
              <div class="col-sm-10">
                <input type="number" class="form-control" placeholder="Masukkan diskon barang yang dibeli (%)" onChange={this.diskon} />
              </div>
            </div>
            <div className="row pt-4 mb-4">
              <div className="col d-grid gap-2">
                <button type="button" onClick={this.hitung} className="btn btn-success">Hitung</button>
              </div>
            </div>
            <div className="row p-2 mb-2">
            <div className="alert alert-info"><p>Harga akhir yang harus anda bayar senilai Rp. {this.state.hargaAkhir},00</p></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
