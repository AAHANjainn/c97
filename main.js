function area() {
    window.location="area.html";
}

function perimeter() {
    window.location="perimeter.html";
}

function back(){
    window.location="index.html"
}
function circle(){
    window.location="circle_area.html"
}
function circle_1(){
    window.location="circle_perimeter.html"
}
function rectangle(){
    window.location="rectangle_area.html"
}
function rectangle_1(){
    window.location="rectangle_perimeter.html"
}
function triangle(){
    window.location="triangle_area.html"
}
function triangle_1(){
    window.location="triangle_perimeter.html"
}
function rhombus(){
    window.location="rhombus_area.html"
}
function rhombus_1(){
    window.location="rhombus_perimeter.html"
}



function calculate_circle_area(){
    radius_of_circle = Number(document.getElementById("radius").value);
    area_of_circle = 3.14*radius_of_circle*radius_of_circle;
    document.getElementById("answer").innerHTML = area_of_circle;
}
function calculate_circle_perimeter(){
    radius_of_circle = Number(document.getElementById("radius").value);
    area_of_circle = 2*3.14*radius_of_circle;
    document.getElementById("answer").innerHTML = area_of_circle;
}

function calculate_rectangle_area(){
    length_of_rectangle = Number(document.getElementById("length").value);
    breadth_of_rectangle = Number(document.getElementById("breadth").value);
    area_of_rectangle = breadth_of_rectangle*length_of_rectangle;
    document.getElementById("answer").innerHTML = area_of_rectangle;
}

function calculate_rectangle_perimeter(){
    length_of_rectangle = Number(document.getElementById("length").value);
    breadth_of_rectangle = Number(document.getElementById("breadth").value);
    perimeter_of_rectangle = 2*(breadth_of_rectangle + length_of_rectangle);
    document.getElementById("answer").innerHTML = perimeter_of_rectangle;
}

function calculate_triangle_area(){
    base_of_triangle = Number(document.getElementById("base").value);
    height_of_triangle = Number(document.getElementById("height").value);
    area_of_triangle = 1/2*base_of_triangle*height_of_triangle;
    document.getElementById("answer").innerHTML = area_of_triangle;
}

function calculate_triangle_perimeter(){
    side_1 = Number(document.getElementById("side_1").value);
    side_2 = Number(document.getElementById("side_2").value);
    side_3 = Number(document.getElementById("side_3").value);
    perimeter_of_triangle = side_1 + side_2 + side_3;
    document.getElementById("answer").innerHTML = perimeter_of_triangle;
}

function calculate_rhombus_area(){
    diagonal_1_of_rhombus = Number(document.getElementById("diagonal_1").value);
    diagonal_2_of_rhombus = Number(document.getElementById("diagonal_2").value);
    area_of_rhombus = 1/2*diagonal_1_of_rhombus*diagonal_2_of_rhombus;
    document.getElementById("answer").innerHTML = area_of_rhombus;
}
