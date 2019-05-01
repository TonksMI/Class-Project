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
var score = 1;
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

function Paddle(x, y, width, height, type) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.x_speed = 0;
	this.y_speed = 0;
	this.score = 0;
	this.type = type;
};

Paddle.prototype.render = function () {
	context.fillStyle = "#000000";
	context.fillRect(this.x, this.y, this.width, this.height);
};

function Player() {
	this.paddle = new Paddle(175, 580, 50, 10, 1);
};

function Computer() {
	this.paddle = new Paddle(175, 10, 50, 10, 0);
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
};

Ball.prototype.render = function () {
	context.beginPath();
	context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
	context.fillStyle = "#000000";
	context.fill();
};

class OutNode {
	constructor(a, b,  var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12)
{
  this.a = GaussianDist(a,2);
  this.b = GaussianDist(b,2);
	this.fit = 0;
  this.node1 = new Node(var1, var2, var3, var4, var5, var6);
  this.node2 = new Node(var7, var8, var9, var10, var11, var12);
}

getOutput = function(ball, player){
    return this.a * this.node1.outputNum(ball, player) + this.b * this.node2.outputNum(ball, player);
};
putFit = function(val)  {
    this.fit = val;
  };
};
class Node
{
	constructor (var1, var2, var3, var4, var5, var6) {
  this.a = GaussianDist(var1,2);
  this.b = GaussianDist(var2,2);
  this.c = GaussianDist(var3,2);
  this.d = GaussianDist(var4,2);
  this.e = GaussianDist(var5,2);
  this.f = GaussianDist(var6,2);
}
outputNum = function(ball, player){
  return this.a * ball.x + this.b * ball.y + this.c * ball.x_speed + this.d * ball.y_speed + this.e * player.paddle.x + this.f * player.paddle.y;
};
};
var GaussianDist = function(mean, std){
  var temp1 = Math.sqrt(2 * Math.exp(1.0 / Math.random()));
  var temp2 = Math.cos(2 * 3.14 * Math.random());
  return temp1 * temp2;
};
class Population {
	constructor (){
  this.n1 = new OutNode(0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  this.n2 = new OutNode(0,0,0,0,0,0,0,0,0,0,0,0,0,0);
}
	getOutNode = function ()		{
			if (this.node == 0)
			{
				return this.n1;
			}
			return this.n2;
		};
		setFitness = function (fit)	  {
	    this.n2.fit = fit;
	  };
		remove = function()	  {
	    if(this.n1.fit < this.n2.fit)
	    {
	      this.n1 = this.n2;
				console.log(this.n1.fit);
	    }
	    else {
	      this.n2 = new OutNode(this.n1.a, this.n1.b,this.n1.node1.a,this.n1.node1.b,this.n1.node1.c,this.n1.node1.d,this.n1.node1.e,this.n1.node1.f,this.n1.node2.a,this.n1.node2.b,this.n1.node2.c,this.n1.node2.d,this.n1.node2.e,this.n1.node2.f);
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
		this.y = 300;// set fitness to the node check if better
		paddle1.x = 175;
		paddle1.y = 580;
		pop.setFitness(paddle1.score);
		pop.remove();
		paddle1.score = 0;
	}

	if (top_y > 300) {
		if (top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
			// hit the player's paddle
			this.y_speed = -3;
			this.x_speed += (paddle1.x_speed / 2);
			this.y += this.y_speed;
			paddle1.score += 600;
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
Player.prototype.update = function (ball) {
	var node = pop.n2;
	 	var value = node.getOutput(ball, this);
		if (value < 0.0) { // left arrow
			this.paddle.move(-4, 0, ball);
		} else if (value > 0.0) { // right arrow
			this.paddle.move(4, 0, ball);
		}
		if(Math.sqrt(Math.pow(this.paddle.x - ball.x, 2) - Math.pow(this.paddle.y - ball.y, 2)) > 0)
		{
			this.paddle.score = this.paddle.score + 100 - Math.sqrt(Math.pow(this.paddle.x - ball.x, 2) - Math.pow(this.paddle.y - ball.y, 2));
		}
};

Paddle.prototype.move = function (x, y, ball) {
	this.x += x;
	this.y += y;
	this.x_speed = x;
	this.y_speed = y;
	if (this.x < 0) { // all the way to the left
		this.x = 0;
		this.x_speed = 0;
		if(this.type == 1)
		{
			ball.x = 200;
			ball.y = 300;
			this.x = 175;
			this.y = 580;
			ball.x_speed = 1;
			ball.y_speed = 3;
			pop.setFitness(this.score);
			pop.remove();
			this.score = 0;
		}
	} else if (this.x + this.width > 400) { // all the way to the right
		this.x = 400 - this.width;
		this.x_speed = 0;
		if(this.type == 1)
		{
			ball.x = 200;
			ball.y = 300;
			ball.x_speed = 1;
			ball.y_speed = 3;
			this.x = 175;
			this.y = 580;
			pop.setFitness(this.score);
			pop.remove();
			this.score = 0;
		}
	}
};

var update = function () {
	player.update(ball);
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
