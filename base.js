// Registering component in log-component.js
AFRAME.registerComponent('base', {
    schema: {
      radius:{type:'number',default:150},
      height:{type:'number',default:},
    },
    init: function () {3
       this.el.setAttribute('geometry',{
        primitive:'cylinder',
        radius:this.data.radius,
        height:this.data.height
       })
       this.el.setAttribute('material',{color:'white'})
      }
  });
  

 
