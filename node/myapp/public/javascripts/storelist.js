var si = new switchImage();
si.title_id = "title_list";
si.body_id = "body_list";
si.current_class = "barh";
si.normal_class = "";
si.init();

$(function () {
  $("img.lazy").lazyload({
    effect : "fadeIn",
    placeholder: 'data:image/gif;base64,R0lGODlhAgABAIAAAObm5gAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkJEMjk0N0NBMUNCMTFFNzkwMTNDRjFFQUZFRkQ2OTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkJEMjk0N0RBMUNCMTFFNzkwMTNDRjFFQUZFRkQ2OTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQkQyOTQ3QUExQ0IxMUU3OTAxM0NGMUVBRkVGRDY5NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQkQyOTQ3QkExQ0IxMUU3OTAxM0NGMUVBRkVGRDY5NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==',
    threshold : 200
  });
  var container = document.getElementsByClassName("milinews-box")[0];
  if (container === undefined) document.getElementById("milinews").style.display = "none";
  if (GetQueryString("tid") === 48){
    document.getElementsByClassName("store_content")[0].style.display = "none"; 
    document.getElementsByClassName("storage-page")[0].style.display = "none"; 
  }  
  var oli = document.querySelector("#s").querySelectorAll("li");
     for(var i = 0;i < (oli.length -1)/4;i++){ 
       oli[4*i].style.margin = "0 0 40px";
  } 
});
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return parseInt(unescape(r[2])); return null;
}

setLeft ()

window.onresize = function () {
setLeft ()
}

function setLeft () {
var left = (document.body.clientWidth - 1920) / 2 + 'px'
$('#spray-video').css('left', left)
}