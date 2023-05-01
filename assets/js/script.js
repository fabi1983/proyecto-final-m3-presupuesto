let form_presupuesto = document.getElementById("form_presupuesto")

    let monto_inicial = document.getElementById("monto_inicial")

    form_presupuesto.addEventListener("submit", function(event) {
      event.preventDefault()
      
      let presupuesto = parseInt(document.getElementById("presupuesto_inicial").value)


      monto_inicial.innerHTML = `<tr>
              <td id="presupuesto_g">${presupuesto}</td>
              <td id="suma_g">0</td>
              <td id="saldo_g">0</td>
            </tr>`
    })


    // Inicio formulario Gasto
    let form_gasto = document.getElementById("form_gasto")

    let array_montos = [
     /* {
      id: 1,
      valor: 1500,
      gasto: "aceite belmont"
    },
    {
      id: 2,
      valor: 2500,
      gasto: "arroz"
    } */
   ]

   
   form_gasto.addEventListener("submit", function(event){
     event.preventDefault()
     // console.log("click dentro del form gasto")
      
      let presupuesto = parseInt(document.getElementById("presupuesto_g").innerText)
      //console.log(presupuesto)


      let gasto = document.getElementById("nombre_gasto").value
      let valor = document.getElementById("valor_gasto").value
      //console.log(array_montos.length)

      document.getElementById("container_gastos").innerHTML = ""

      array_montos.push({
        id: array_montos.length + 1,
        valor: valor,
        gasto: gasto
      })

      let suma_gastos = 0

      let tbody = ''
    
      array_montos.forEach( (element) => {
       
        suma_gastos += parseInt(element.valor)

        tbody += `
          <tr>
            <th scope="row">${element.gasto}</th>
            <td>${element.valor}</td>
            <td>
              <button class="btn btn-danger"  onclick="eliminar_gasto(${element.id})"  >Eliminar</button>  
            </td>
          <tr>
        `
      })
      document.getElementById("container_gastos").innerHTML += tbody
      
      /*  document.getElementById("monto_inicial").innertext = suma_gastos */
      //console.log(document.getElementById("monto_inicial").innerHTML)
      document.getElementById("suma_g").innerHTML = suma_gastos
      document.getElementById("presupuesto_g").innerHTML = presupuesto

      document.getElementById("saldo_g").innerText = (presupuesto - suma_gastos)
      //console.log(suma_gastos)
    })


    function eliminar_gasto(id){

      id = parseInt(id)

      let presupuesto = parseInt(document.getElementById("presupuesto_g").innerText)
      
      let array_eliminado = []
      
      // console.log("click en eliminar")
      let tbody = ''
      let suma_gastos = 0 
      // parseInt(document.getElementById("suma_g").innerText)    
      // console.log(suma_gastos)
      document.getElementById("container_gastos").innerHTML = ""
      
        const results = array_montos.filter((element) =>  {
          return element.id !== id
        })

        results.forEach((element) => {
          suma_gastos += parseInt(element.valor)
    
            tbody += `
             <tr>
               <th scope="row">${element.gasto}</th>
               <td>${element.valor}</td>
               <td>
                 <button class="btn btn-danger"  onclick="eliminar_gasto(${element.id})" >Eliminar</button>  
               </td>
             <tr>
           `
        })
     
        document.getElementById("container_gastos").innerHTML += tbody

        document.getElementById("suma_g").innerText = suma_gastos

        document.getElementById("saldo_g").innerText = (presupuesto - suma_gastos)
    }