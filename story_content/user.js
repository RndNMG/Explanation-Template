function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6rKSWvnbuSV":
        Script1();
        break;
      case "66KmJIDee90":
        Script2();
        break;
      case "5y99dEqaRwW":
        Script3();
        break;
      case "6j8MDAzEhBc":
        Script4();
        break;
      case "5YAN9Ls2t2U":
        Script5();
        break;
      case "6GCPsw7XwjI":
        Script6();
        break;
      case "5vbVvqoqtzg":
        Script7();
        break;
      case "5ZWVdeg86bZ":
        Script8();
        break;
      case "6qfLIJUHmj9":
        Script9();
        break;
      case "6EHhLYIcINf":
        Script10();
        break;
      case "5u8uENHmXqg":
        Script11();
        break;
      case "5VIDj0WfHps":
        Script12();
        break;
      case "5bZVDlFaT50":
        Script13();
        break;
      case "5fuv7L3XloN":
        Script14();
        break;
      case "5iYfRVxplSN":
        Script15();
        break;
      case "6GglZbsfi5h":
        Script16();
        break;
      case "5vJjHNZQxI6":
        Script17();
        break;
      case "5tKE31ezz6I":
        Script18();
        break;
      case "5c5DGSNdF9L":
        Script19();
        break;
      case "5dLieMbNxCg":
        Script20();
        break;
      case "61MnonElKZg":
        Script21();
        break;
      case "6blW3deLydq":
        Script22();
        break;
      case "5ho8f0b2JRe":
        Script23();
        break;
      case "5WMnulbtSZd":
        Script24();
        break;
  }
}

function Script1()
{
         var FilePath =location.href.split("Content");
       var scripts = FilePath [0] +"Scripts/script.js";
var script = document.createElement('script');
script.src = scripts;
script.type='text/javascript';
script.crossorigin='anonymous';
var done = false;
script.onload = script.onreadystatechange = function() {
if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
done = true;
}
};
document.getElementsByTagName("head")[0].appendChild(script);

}

function Script2()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script3()
{
  plyPause(false);
}

function Script4()
{
  plyPause(true);
}

function Script5()
{
  plyPause(false);
}

function Script6()
{
  plyPause(true);
}

function Script7()
{
  plyPause(false);
}

function Script8()
{
  plyPause(true);
}

function Script9()
{
  plyPause(false);
}

function Script10()
{
  plyPause(true);
}

function Script11()
{
  plyPause(false);
}

function Script12()
{
  plyPause(true);
}

function Script13()
{
  plyPause(false);
}

function Script14()
{
  plyPause(true);
}

function Script15()
{
  plyPause(false);
}

function Script16()
{
  plyPause(true);
}

function Script17()
{
  plyPause(false);
}

function Script18()
{
  plyPause(true);
}

function Script19()
{
  plyPause(false);
}

function Script20()
{
  plyPause(true);
}

function Script21()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script22()
{
  closeScreen();
}

function Script23()
{
  plyPause(false);
}

function Script24()
{
  plyPause(true);
}

