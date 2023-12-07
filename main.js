
        function valor(id) {
            let dado = Math.floor(Math.random() * 6) + 1;
            console.log(id)

           document.getElementById(id).innerText = dado

        }


export{valor}