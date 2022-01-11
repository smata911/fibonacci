import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 



@Component({
  selector: 'app-ahorros-global',
  templateUrl: './ahorros-global.component.html',
  styleUrls: ['./ahorros-global.component.scss']
})
export class AhorrosGlobalComponent implements OnInit {
  model={
    name:'SELECCIONA',
    
    totalAhorro:'',
    cantidadInicio:1,
    tiempo:'SELECCIONE',
    moneda:''
  };
  elementRef: any;
  
  constructor() { }

  ngOnInit(): void {

    
//    this.selectedAttributes = this.sensorTypes[0]
  }

  canAhorro='';
  n1=0;
n2=1;
total=0;
totalAhorrar=0;
fibo:string[]=[];
agregar=0; 
cantidadInicio=0;
tiempo="";
tiempoEtiqueta='';
placeholdeCantidad='';
contador=0;
public  etiqueta='';

moneda='';

onChange(event: any){
  this.tiempo=this.model.tiempo;
  console.log(event);
  this.etiqueta = 'INGRESE NUMERO DE '+this.tiempo+'S:';
  
  }



  onLimpiar({value:formData}:NgForm):void{
    this.fibo=[];
    this.model.moneda='';
    this.model.tiempo='';
    this.model.totalAhorro='';
    this.model.cantidadInicio=0;
    this.n1=0;
    this.n2=1;
    this.total=0;
    this.totalAhorrar=0;
    this.agregar=0; 
    this.cantidadInicio=0;
    this.contador=0;
  }

  onSubmit({value:formData}:NgForm):void{//se hace asi, porque nos trae todo lo del formulario, incluyendo eventos...y renombra a formData
    this.canAhorro=this.model.totalAhorro+1;
    this.cantidadInicio=this.model.cantidadInicio;
    
    
    this.tiempo=this.model.tiempo;

    this.moneda=this.model.moneda
    // this.etiqueta='iii'+this.tiempo;
    
    console.log(this.tiempo);


   if (this.tiempo=="DIA"){
     this.tiempoEtiqueta='DIA: '
    }
   else if
   (this.tiempo=="SEMANA"){
     this.tiempoEtiqueta='SEMANA: '
  }else if(this.tiempo=='MES'){
    this.tiempoEtiqueta='Mes'
  }else if(this.tiempo=='AÑO'){
    this.tiempoEtiqueta=='AÑOS'
  }



   for (let i = 0; i < parseInt(this.canAhorro)-1; i++) {
    


    this.total=this.n1+this.n2
this.contador=i+1;
    this.agregar=(this.total)*this.cantidadInicio;
    this.fibo[i] =this.tiempoEtiqueta +this.contador+'   ='+this.moneda+this.agregar.toString()
    this.n1=this.n2;
    this.n2=this.total

    this.totalAhorrar=this.totalAhorrar+this.agregar
    
  }

  const numeroF=this.fibo.length;
  this.fibo[numeroF]='TOTAL AHORRAR: '+this.moneda+this.totalAhorrar.toString();

  for (let numero of this.fibo){
    console.log(numero);
  }

}}
