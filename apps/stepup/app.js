function remind() {
    Bangle.buzz(1000,1);
}

//init graphics
g.clear();
require("Font8x12").add(Graphics);
g.setFont("8x12",2);
g.setFontAlign(0,0);
g.flip();
g.setColor(0xF800);
g.drawString("sitting is dangerous!", g.getWidth()/2, g.getHeight()/2);
	
setInterval(remimd,60);;()/2, g.getHeight()/2);
	
	setInterval(remimd,60);alse };

//check if HID enabled and show message
if (settings.HID=="kb" || settings.HID=="kbmedia") {
	g.setColor(0x03E0);
	g.drawString("click to find", g.getWidth()/2, g.getHeight()/2);
	
	//register all buttons and screen to find phone
	setWatch(find, BTN1);
	setWatch(find, BTN2);
	setWatch(find, BTN3);
	setWatch(find, BTN4);
	setWatch(find, BTN5);

}else{
	g.setColor(0xf800);
	g.drawString("enable HID!", g.getWidth()/2, g.getHeight()/2);
}