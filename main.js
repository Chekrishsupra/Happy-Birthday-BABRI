var images=[
"https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.11&permmsgid=msg-f:1696631998850101418&th=178ba5d0560570aa&view=att&disp=safe&realattid=178ba5beb5fea720ffec",
"https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.1&permmsgid=msg-f:1696631998850101418&th=178ba5d0560570aa&view=att&disp=safe&realattid=178ba5beb27e876c1daa",
"https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.2&permmsgid=msg-f:1696631998850101418&th=178ba5d0560570aa&view=att&disp=safe&realattid=178ba5bea8fdfee86bf5",
"https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.7&permmsgid=msg-f:1696631998850101418&th=178ba5d0560570aa&view=att&disp=safe&realattid=178ba5bea53dca104833",
"https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.12&permmsgid=msg-f:1696631998850101418&th=178ba5d0560570aa&view=att&disp=safe&realattid=178ba5bea3bb7247e5a2",
"https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.10&permmsgid=msg-f:1696631998850101418&th=178ba5d0560570aa&view=att&disp=safe&realattid=178ba5beb41e8e77de2b",
"https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.9&permmsgid=msg-f:1696631998850101418&th=178ba5d0560570aa&view=att&disp=safe&realattid=178ba5beb0bf699c82b9",
"https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.3&permmsgid=msg-f:1696631998850101418&th=178ba5d0560570aa&view=att&disp=safe&realattid=178ba5beab1e05f42c76",
"https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.11&permmsgid=msg-f:1696631998850101418&th=178ba5d0560570aa&view=att&disp=safe&realattid=178ba5beb5fea720ffec",
"https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.11&permmsgid=msg-f:1696631998850101418&th=178ba5d0560570aa&view=att&disp=safe&realattid=178ba5beb5fea720ffec",
"https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.1&permmsgid=msg-f:1696632140511449008&th=178ba5f151b20fb0&view=att&disp=safe&realattid=178ba5e46abc7e6f95f1"
]

  var i= 0;
  function nextslide(){ document.getElementById("album").src=images[i];
    i++;
   document.getElementById("audio").play();  
  }