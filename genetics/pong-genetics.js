// Your code here!
var animate = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function (callback) { window.setTimeout(callback, 1000 / 60) };
var pongArea = {};
var canvas = document.createElement('canvas');
var style = canvas.style;
style.alignContent = "center";
var width = 400;
var height = 600;
var centered = window.innerWidth;
canvas.width = width;
canvas.height = height;
var score = 0;
var context = canvas.getContext('2d');


window.onload = function () {
	document.body.appendChild(canvas);
	animate(step);
};

var step = function () {
	update();
	render();
	animate(step);
};

var update = function () {
};

function Paddle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.x_speed = 0;
	this.y_speed = 0;
};

Paddle.prototype.render = function () {
	context.fillStyle = "#000000";
	context.fillRect(this.x, this.y, this.width, this.height);
};

function Player() {
	this.paddle = new Paddle(175, 580, 50, 10);
};

function Computer() {
	this.paddle = new Paddle(175, 10, 50, 10);
};

Player.prototype.render = function () {
	this.paddle.render();
};

Computer.prototype.render = function () {
	this.paddle.render();
};

function Ball(x, y) {
	this.x = x;
	this.y = y;
	this.x_speed = 1;
	this.y_speed = 3;
	this.radius = 5;
}

Ball.prototype.render = function () {
	context.beginPath();
	context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
	context.fillStyle = "#000000";
	context.fill();
};

class OutNode {
	constructor(a, b,  var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12)
{
  this.a = a;
  this.b = b;
	this.fit = 0;
  this.node1 = new Node(var1, var2, var3, var4, var5, var6);
  this.node2 = new Node(var7, var8, var9, var10, var11, var12);
}

getOutput = function(){
	console.log(this.a * this.node1.outputNum() + this.b * this.node2.outputNum());
    return this.a * this.node1.outputNum() + this.b * this.node2.outputNum();
};
putFit = function(val)  {
    this.fit = val;
  };
};
class Node
{
	constructor (var1, var2, var3, var4, var5, var6) {
  this.a = var1;
  this.b = var2;
  this.c = var3;
  this.d = var4;
  this.e = var5;
  this.f = var6;
}
outputNum = function(){
  return this.a * Ball.x + this.b * Ball.y + this.c * Ball.x_speed + this.d * Ball.y_speed + this.e * Player.x + this.f * Player.y;
};
};
var GaussianDist = function(mean, std){
  var temp1 = Math.sqrt(2 * Math.exp(1.0 / Math.random()));
  var temp2 = Math.cos(2 * 3.14 * Math.random());
	console.log(temp1*temp2);
  return temp1 * temp2;
};
class Population {
	constructor (){
  this.n1 = new OutNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));
  this.n2 = new OutNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));
	this.node = 0;
}
	getOutNode = function ()		{
			if (this.node == 0)
			{
				return this.n1;
			}
			return this.n2;
		};
		setFitness = function (fit, n)	  {
			if (n == 0) {
	    this.n1.fit = fit;
			this.node = 1;
		}
		else {
			this.n2.fit = fit;
		}
	  };
		remove = function()	  {
	    if(this.n1.fit < this.n2.fit)
	    {
	      this.n1 = new outNode(GaussianDist(this.n2.a, 5), GaussianDist(this.n2.b, 5),GaussianDist(this.n2.c, 5),GaussianDist(this.n2.d, 5),GaussianDist(this.n2.e, 5),GaussianDist(this.n2.f, 5),GaussianDist(this.n2.node1.a, 5),GaussianDist(this.n2.node1.b, 5),GaussianDist(this.n2.node1.c, 5),GaussianDist(this.n2.node1.d, 5),GaussianDist(this.n2.node1.e, 5),GaussianDist(this.n2.node1.f, 5),GaussianDist(this.n2.node2.a, 5),GaussianDist(this.n2.node2.b, 5),GaussianDist(this.n2.node2.c, 5),GaussianDist(this.n2.node2.d, 5),GaussianDist(this.n2.node2.e, 5),GaussianDist(this.n2.node2.f, 5));
	    }
	    else {
	      this.n2 = new outNode(GaussianDist(this.n1.a, 5), GaussianDist(this.n1.b, 5),GaussianDist(this.n1.c, 5),GaussianDist(this.n1.d, 5),GaussianDist(this.n1.e, 5),GaussianDist(this.n1.f, 5),GaussianDist(this.n1.node1.a, 5),GaussianDist(this.n1.node1.b, 5),GaussianDist(this.n1.node1.c, 5),GaussianDist(this.n1.node1.d, 5),GaussianDist(this.n1.node1.e, 5),GaussianDist(this.n1.node1.f, 5),GaussianDist(this.n1.node2.a, 5),GaussianDist(this.n1.node2.b, 5),GaussianDist(this.n1.node2.c, 5),GaussianDist(this.n1.node2.d, 5),GaussianDist(this.n1.node2.e, 5),GaussianDist(this.n1.node2.f, 5));
	    }
	  };
};

var player = new Player();
var computer = new Computer();
var ball = new Ball(200, 300);
var pop = new Population();
var fitness = 0;

var render = function () {
	context.fillStyle = "LightGray";
	context.fillRect(0, 0, width, height);
	context.fillText(score, 200, 0, 200);
	player.render();
	computer.render();
	ball.render();
};

var update = function () {
	ball.update();
};

Ball.prototype.update = function () {
	this.x += this.x_speed;
	this.y += this.y_speed;
};

var update = function () {
	ball.update(player.paddle, computer.paddle);
};

Ball.prototype.update = function (paddle1, paddle2) {
	this.x += this.x_speed;
	this.y += this.y_speed;
	var top_x = this.x - 5;
	var top_y = this.y - 5;
	var bottom_x = this.x + 5;
	var bottom_y = this.y + 5;

	if (this.x - 5 < 0) { // hitting the left wall
		this.x = 5;
		this.x_speed = -this.x_speed;
	} else if (this.x + 5 > 400) { // hitting the right wall
		this.x = 395;
		this.x_speed = -this.x_speed;
	}

	if (this.y < 0 || this.y > 600) { // a point was scored
		this.x_speed = 1;
		this.y_speed = 3;
		this.x = 200;
		this.y = 300;// set fitness to the node switch nodes
		pop.setFitness(score, 0);
	}

	if (top_y > 300) {
		if (top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
			// hit the player's paddle
			this.y_speed = -3;
			this.x_speed += (paddle1.x_speed / 2);
			this.y += this.y_speed;
			score += 600;
		}
	} else {
		if (top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y && top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x) {
			// hit the computer's paddle
			this.y_speed = 3;
			this.x_speed += (paddle2.x_speed / 2);
			this.y += this.y_speed;
		}
	}
};
var node = pop.n1;
Player.prototype.update = function () {
	 	var value = node.getOutput();
		if (value < 0.0) { // left arrow
			this.paddle.move(-4, 0);
		} else if (value > 0.0) { // right arrow
			this.paddle.move(4, 0);
		} else {
			this.paddle.move(0, 0);
		}
		score += 600 - Math.sqrt(Math.pow(Player.x - Ball.x, 2) - Math.pow(Player.y - Ball.y));
};

Paddle.prototype.move = function (x, y) {
	this.x += x;
	this.y += y;
	this.x_speed = x;
	this.y_speed = y;
	if (this.x < 0) { // all the way to the left
		this.x = 0;
		this.x_speed = 0;
	} else if (this.x + this.width > 400) { // all the way to the right
		this.x = 400 - this.width;
		this.x_speed = 0;
	}
};

var update = function () {
	player.update();
	computer.update(ball);
	ball.update(player.paddle, computer.paddle);
};

Computer.prototype.update = function (ball) {
	var x_pos = ball.x;
	var diff = -((this.paddle.x + (this.paddle.width / 2)) - x_pos);
	if (diff < 0 && diff < -4) { // max speed left
		diff = -5;
	} else if (diff > 0 && diff > 4) { // max speed right
		diff = 5;
	}
	this.paddle.move(diff, 0);
	if (this.paddle.x < 0) {
		this.paddle.x = 0;
	} else if (this.paddle.x + this.paddle.width > 400) {
		this.paddle.x = 400 - this.paddle.width;
	}
};
