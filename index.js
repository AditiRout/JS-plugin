function Check() {
    // Check if URL contains the parameter
    var url = document.getElementById("linklr").value;
    var iframeUrl =url.split('iframe_url=')[1];
    console.log(iframeUrl)
    if (!iframeUrl) return;
  
    // Create the iFrame element
    var iframe = document.createElement("iframe");
    iframe.src = iframeUrl;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    document.body.appendChild(iframe);
  
    // Create the hover button
    var hoverBtn = document.createElement("button");
    hoverBtn.innerHTML = "Hover";
    hoverBtn.style.position = "absolute";
    hoverBtn.style.top = "10px";
    hoverBtn.style.right = "10px";
    hoverBtn.style.zIndex = "999";
    document.body.appendChild(hoverBtn);
  
    // Add hover event to the button
    hoverBtn.addEventListener("mouseover", function() {
      iframe.style.opacity = "0.5";
    });
    hoverBtn.addEventListener("mouseout", function() {
      iframe.style.opacity = "1";
    });
  };