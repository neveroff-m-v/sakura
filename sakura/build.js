class group {
    constructor(Obj) {
        Obj.Element.innerHTML =
        `<div id='${Obj.ID}' style='left:${Obj.X}px; top:${Obj.Y}px;'>${Obj.Child}</div>`;
    }
}

class label {
    constructor(Obj) {
        if(Obj.W == null) Obj.W = "115"; else Obj.W =Obj.W * 30 - 5;
        if(Obj.H == null) Obj.H = "25"; else Obj.H = Obj.H * 30 - 5;
        if(Obj.Text == null) Obj.Text = "???";
        Obj.Element.innerHTML =
        `<div style='left:${Obj.X}px; top:${Obj.Y}px;'><input type='button' class='default' id='${Obj.ID}' value='${Obj.Text}' style='width:${Obj.W}px; height:${Obj.H}px;'/></div>`;
    }
}

class label_title {
    constructor(Obj) {
        if(Obj.W == null) Obj.W = "115"; else Obj.W =Obj.W * 30 - 5;
        if(Obj.H == null) Obj.H = "25"; else Obj.H = Obj.H * 30 - 5;
        if(Obj.Text == null) Obj.Text = "???";
        Obj.Element.innerHTML =
        `<div style='left:${Obj.X}px; top:${Obj.Y}px;'><input type='button' class='default title' id='${Obj.ID}' value='${Obj.Text}' style='width:${Obj.W}px; height:${Obj.H}px;'/></div>`;
    }
}

class button {
    constructor(Obj) {
        if(Obj.W == null) Obj.W = "115"; else Obj.W = Obj.W * 30 - 5;
        if(Obj.H == null) Obj.H = "25"; else Obj.H = Obj.H * 30 - 5;
        if(Obj.Text == null) Obj.Text = "???";
        Obj.Element.innerHTML =
        `<div style='left:${Obj.X}px; top:${Obj.Y}px;'><input type='button' class='hover' id='${Obj.ID}' value='${Obj.Text}' style='width:${Obj.W}px; height:${Obj.H}px;'/></div>`;
    }
}

class icon {
    constructor(Obj) {
        Obj.W = 25;    
        Obj.H = 25;
        if(Obj.Text == null) Obj.Text = "???"; else Obj.Text = `&#x${Obj.Text};`;
        Obj.Element.innerHTML =
        `<div style='left:${Obj.X}px; top:${Obj.Y}px;'><input type='button' class='hover icon' id='${Obj.ID}' value='${Obj.Text}' style='width:${Obj.W}px; height:${Obj.H}px;'/></div>`;
    }
}

class input {
    constructor(Obj) {
        if(Obj.W == null) Obj.W = "145"; else Obj.W = Obj.W * 30 - 5;
        if(Obj.H == null) Obj.H = "25"; else Obj.H = Obj.H * 30 - 5;
        if(Obj.Text == null) Obj.Text = "???";
        if(Obj.Reference == null) Obj.Text = "";
        Obj.Element.innerHTML =
        `<div style='left:${Obj.X}px; top:${Obj.Y}px;'><input type='input' class='hover focus' id='${Obj.ID}' value='${Obj.Text}' placeholder='${Obj.Reference}' style='width:${Obj.W}px; height:${Obj.H}px;'/></div>`;
    }
}

class input_password {
    constructor(Obj) {
        if(Obj.W == null) Obj.W = "115"; else Obj.W = Obj.W * 30 - 5;
        if(Obj.H == null) Obj.H = "25"; else Obj.H = Obj.H * 30 - 5;
        if(Obj.Text == null) Obj.Text = "???";
        if(Obj.Reference == null) Obj.Text = "";
        Obj.Element.innerHTML =
        `<div style='left:${Obj.X}px; top:${Obj.Y}px;'><input type='password' class='hover focus' id='${Obj.ID}' value='${Obj.Text}' placeholder='${Obj.Reference}' style='width:${Obj.W}px; height:${Obj.H}px;'/></div>`;
    }
}

class object {
    has(Attribute) {
        return this.Element.hasAttribute(Attribute);
    }
    
    get(Attribute) {
        let Value = this.Element.getAttribute(Attribute);
        this.Element.removeAttribute(Attribute);
        return Value;
    }

    constructor(Element, Index) {
        this.Element = Element;
        this.Child = this.Element.innerHTML;
        this.ID = this.get("id");
        this.X = this.get("x");
        this.Y = this.get("y");
        this.W = this.get("w");
        this.H = this.get("h");
        this.Text = this.get("txt");
        this.Reference = this.get("ref");

        if(this.ID == null) this.ID = `OBJECT${Index}`;
        if(this.X == null) this.X = "0"; else this.X = this.X * 30;
        if(this.Y == null) this.Y = "0"; else this.Y = this.Y * 30;

        if (this.has("group")) new group(this);
        if (this.has("label")) new label(this);
        if (this.has("label_title")) new label_title(this);
        if (this.has("button")) new button(this);
        if (this.has("icon")) new icon(this);
        if (this.has("input")) new input(this);
        if (this.has("input_password")) new input_password(this);
    }
}

build();
function build() {
    let List = document.getElementsByTagName("obj");
    let Length = List.length;

    for (let i = 0; i < Length; i++) {
        new object(List[i], i);
    }
}