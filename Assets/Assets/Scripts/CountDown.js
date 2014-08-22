#pragma strict

var Timer = 0.0;

function Start () {

}

function Update () {
	Timer += Time.deltaTime;
	Debug.Log(Timer);
}