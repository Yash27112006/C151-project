AFRAME.registerComponent('car',{
    schema:{
        moveY:{type:'number',default:2},
        moveX:{type:'number',default:2}
    },
    tick:function(){
        this.data.moveY = this.data.moveY+0.5
        this.data.moveX = this.data.moveX+0.02

        var rotate = this.el.getAttribute('rotation')
        var pos = this.el.getAttribute('position')

        rotate.y = this.data.moveY
        pos.x = this.data.moveX
        
        this.el.setAttribute('rotation',{x:rotate.x,y:rotate.y,z:rotate.z})
        this.el.setAttribute('position',{x:pos.x,y:pos.y,z:pos.z})
    }
})