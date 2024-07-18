function generateQRCode() {
            let link = document.getElementById("linkInput").value;
            if (!link) {
                alert("Please enter a link");
                return;
            }

            let qrcodeContainer = document.getElementById("qrcode");
            qrcodeContainer.innerHTML = "";

            let qrcode = new QRCode(qrcodeContainer, {
                text: link,
                width: 128,
                height: 128
            });

            setTimeout(() => {
                let qrCanvas = qrcodeContainer.getElementsByTagName("canvas")[0];
                let dataURL = qrCanvas.toDataURL("image/png");
                let downloadLink = document.getElementById("downloadLink");
                downloadLink.href = dataURL;
                downloadLink.style.display = "inline-block";
            }, 300);
        }
