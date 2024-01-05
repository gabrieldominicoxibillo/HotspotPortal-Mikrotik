var vanzJ = {
        varName: function() {
            return this.textEdit;
          }
        }
        //WIFI NAME HERE
        var wifiName = {
          textEdit:"Voucher Wi-Fi",
        }
        //RUNNING BANNER TEXT HERE
        var runningText = {
          textEdit:"Welcome to Voucher Wi-Fi Portal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>10.0.0.1</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enjoy the unlimited data surfing, online gaming, streaming and downloading!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        }
        //INFO TEXT HERE
        var infoText = {
          textEdit:"Enter the previous voucher code above to resume time.",

        
        }

        //POWERED BY TEXT HERE
        var pwrText = {
          textEdit:"Powered by Mikhmon",
        }

        var a = vanzJ.varName.call(wifiName); 
        document.getElementById("callwifiName").innerHTML = a;
        var b = vanzJ.varName.call(runningText); 
        document.getElementById("callrunningText").innerHTML = b;
        var c = vanzJ.varName.call(infoText); 
        document.getElementById("callinfoText").innerHTML = c;
        var d = vanzJ.varName.call(copyrightText); 
        document.getElementById("callcopyrightText").innerHTML = d;
        var e = vanzJ.varName.call(pwrText); 
        document.getElementById("callpwrText").innerHTML = e;