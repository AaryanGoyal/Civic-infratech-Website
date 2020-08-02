(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "registerKey": function(key, value){  window[key] = value; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "existsKey": function(key){  return key in window; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } }
 },
 "class": "Player",
 "defaultVRPointer": "laser",
 "minHeight": 20,
 "contentOpaque": false,
 "downloadEnabled": false,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 20,
 "verticalAlign": "top",
 "propagateClick": true,
 "desktopMipmappingEnabled": false,
 "borderSize": 0,
 "definitions": [{
 "initialPosition": {
  "yaw": -146.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B947B2AA_AE6F_9F97_4193_A3E7DD12AE35"
},
{
 "initialPosition": {
  "yaw": 37.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B629A402_AE6F_9A96_41D4_496F1E1B0EA8"
},
{
 "initialPosition": {
  "yaw": 171.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B80C0A0F_AE6F_8EAD_41D4_CDC5D0C72F1D"
},
{
 "initialPosition": {
  "yaw": -41.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B99F0394_AE6F_9DB3_41C5_59EE8F4B1823"
},
{
 "initialPosition": {
  "yaw": 148.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B97F7ACA_AE6F_8F97_41D1_649723D11204"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_camera"
},
{
 "initialPosition": {
  "yaw": -96.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6C244BD_AE6F_9BED_41DB_86ACFD87C99A"
},
{
 "initialPosition": {
  "yaw": 26.59,
  "class": "PanoramaCameraPosition",
  "pitch": 2.45
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 90.82,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.82,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_camera"
},
{
 "initialPosition": {
  "yaw": -79.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6B3F4DC_AE6F_9BB3_41D5_33CCEBF5A98A"
},
{
 "initialPosition": {
  "yaw": -2.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B602FC9F_AE6F_8BAD_41E5_C8122A0E99E3"
},
{
 "initialPosition": {
  "yaw": -144.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8973A9B_AE6F_8FB5_41D2_BD4B84EFC89E"
},
{
 "initialPosition": {
  "yaw": -3.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B69E454A_AE6F_9A96_41DC_97F8F7FF5439"
},
{
 "initialPosition": {
  "yaw": -121.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B90A3308_AE6F_9E92_41A2_49EF3DE2E9CE"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "16",
 "hfovMin": "150%",
 "id": "panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B7DC26EA_ABBC_3F7A_41E0_D23EB0051D01",
  "this.overlay_B706AF7D_ABBD_ED5E_41C8_FFA5A0BA6A15",
  "this.overlay_B7D1A35E_ABBC_755A_41C0_B1D723E726BA",
  "this.overlay_B7387B84_ABBC_15AF_41C5_77E4FF96C4F1",
  "this.overlay_B7774677_ABBC_3F69_41D2_395D037F9941",
  "this.overlay_B6817ECC_ABBC_2FBE_41D5_C6A63CCD045F",
  "this.overlay_B7D26F26_ABBC_6EEA_41C4_67B3D7859AA4",
  "this.panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB"
  },
  {
   "yaw": 33.47,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186",
   "backwardYaw": -118.71
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E"
  },
  {
   "yaw": -130.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732",
   "backwardYaw": 72.33
  },
  {
   "yaw": 138.2,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC",
   "backwardYaw": -22.17
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "10",
 "hfovMin": "150%",
 "id": "panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BE987306_ABAB_F6AA_41D8_45E2E34E5894",
  "this.overlay_BE17B6E4_ABAC_1F6E_41D6_26B24E268EB6",
  "this.overlay_BFCEB840_ABAC_72A6_41E1_B25A02A424B9",
  "this.panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 131.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6",
   "backwardYaw": -113.39
  },
  {
   "yaw": -75.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE",
   "backwardYaw": 64.56
  },
  {
   "yaw": 67.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24",
   "backwardYaw": 176.24
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "x1",
 "hfovMin": "150%",
 "id": "panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498",
 "class": "Panorama",
 "overlays": [
  "this.overlay_96B234C1_AD53_3392_41C8_A4163F8D46D2",
  "this.overlay_9160CCB0_AD53_33F2_41DE_6F4E40966E78",
  "this.overlay_9171CE27_AD53_2E9E_41D2_B63C5F516AC7",
  "this.overlay_EEC73EAA_AD31_EF96_41B9_918A2A503AB7",
  "this.overlay_EC50DBCF_AD31_15AE_41DE_C064005966ED",
  "this.panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 158.06,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193",
   "backwardYaw": 8.52
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704"
  },
  {
   "yaw": 81.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6",
   "backwardYaw": -164.25
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4"
  },
  {
   "yaw": 165.61,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A",
   "backwardYaw": 11.79
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "a5",
 "hfovMin": "150%",
 "id": "panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B1CF8E52_ABB4_EEAA_41CB_1F7527951760",
  "this.overlay_B10C8F9D_ABB4_EDD9_41C6_32DB9AD00469",
  "this.panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 163.97,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588",
   "backwardYaw": -45.89
  },
  {
   "yaw": -152.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24",
   "backwardYaw": 20.38
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_camera"
},
{
 "initialPosition": {
  "yaw": 41.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B7CFFEC2_AE6F_8797_41E2_AF35898FA569"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "1",
 "hfovMin": "150%",
 "id": "panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_A71093B6_A8D6_CA19_41E4_860E549A2C48",
  "this.overlay_B89E52E7_A8D7_4A06_41C7_4EBC4A0EEB6A",
  "this.overlay_A7B7B439_A8D7_4E0B_41D7_F1852FF2C1BA",
  "this.panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -8.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6",
   "backwardYaw": -171.07
  },
  {
   "yaw": -164.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7",
   "backwardYaw": 77.65
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_camera"
},
{
 "initialPosition": {
  "yaw": -48.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B414DF7D_AE6F_856D_41D4_75F2E325652E"
},
{
 "initialPosition": {
  "yaw": -108.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B703EE64_AE6F_8693_41D9_0767146B23BE"
},
{
 "initialPosition": {
  "yaw": 149.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B76CD5A7_AE6F_859D_41D3_6EF28D5108D1"
},
{
 "initialPosition": {
  "yaw": -170.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6663C12_AE6F_8AB7_41E3_0073C8A649D8"
},
{
 "initialPosition": {
  "yaw": -118.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6F01CBE_AE6F_8BEF_41E5_9ED87FDBF29E"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_camera"
},
{
 "initialPosition": {
  "yaw": -172.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6E0ECDE_AE6F_8BAE_41E3_20DDBB077885"
},
{
 "initialPosition": {
  "yaw": 96.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B7E1CE83_AE6F_8795_41C4_E195C1C01F48"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "4",
 "hfovMin": "150%",
 "id": "panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CD94B9D3_AED1_15B6_41D3_6CD4F5B9AD0E",
  "this.panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 50.04,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7",
   "backwardYaw": -113.39
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -168.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B849B944_AE6F_8A93_41D8_805BEEBED895"
},
{
 "initialPosition": {
  "yaw": -139.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B882F25C_AE6F_9EB3_41D1_9A0FEF045D30"
},
{
 "initialPosition": {
  "yaw": -112.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B903AB47_AE6F_8E9D_41B1_80CE4B003D31"
},
{
 "initialPosition": {
  "yaw": -159.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B86718D6_AE6F_8BBF_4198_306D839BAE2E"
},
{
 "initialPosition": {
  "yaw": -132.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8FBCA1F_AE6F_8EAE_41DF_4242D2BB7513"
},
{
 "initialPosition": {
  "yaw": -56.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B991C385_AE6F_9D92_41DB_EFE93FAB1C1E"
},
{
 "initialPosition": {
  "yaw": 177.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9E19B76_AE6F_8D7F_41E4_3015FF75BD46"
},
{
 "initialPosition": {
  "yaw": -4.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8094162_AE6F_9A97_41E5_95F55D5BBE9E"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "r3",
 "hfovMin": "150%",
 "id": "panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BEBB6E3C_A8CB_5A0A_41D5_28764BA8A0CF",
  "this.overlay_BE24A6E7_A8CB_4A07_41DC_4372B9C80630",
  "this.overlay_BF6D9E5B_A935_5A0F_41A8_AFF669C25D91",
  "this.panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 20.2,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB",
   "backwardYaw": 141.47
  },
  {
   "yaw": -142.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196",
   "backwardYaw": 84.61
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_camera"
},
{
 "initialPosition": {
  "yaw": -16.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B83490C6_AE6F_9B9E_41DD_8637CC65B037"
},
{
 "initialPosition": {
  "yaw": 97.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B4589F3F_AE6F_86ED_41CA_3A8C863A702B"
},
{
 "initialPosition": {
  "yaw": -107.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6CE4D4B_AE6F_8A95_41D3_1DEEE9D93A51"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_camera"
},
{
 "initialPosition": {
  "yaw": -51.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8EE71CF_AE6F_9DAD_41DC_DB061DC594B7"
},
{
 "initialPosition": {
  "yaw": -135.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B4361F5E_AE6F_86AF_41D4_8EDF72F915A7"
},
{
 "initialPosition": {
  "yaw": -57.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8B0020E_AE6F_9EAE_41C4_16BA2B98647C"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_camera"
},
{
 "initialPosition": {
  "yaw": 14.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B97EA27B_AE6F_9F75_4197_EEEF43FF22DC"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "a1",
 "hfovMin": "150%",
 "id": "panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BFD7CD51_AB94_72A6_41E1_6A45724CBAB1",
  "this.overlay_BF2A2FFC_AB94_2D5E_41D8_959194072B5B",
  "this.overlay_BF34E239_AB94_36D9_41AB_EBA2A4281F3C",
  "this.panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -113.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659",
   "backwardYaw": 131.88
  },
  {
   "yaw": -86.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE",
   "backwardYaw": 48.01
  },
  {
   "yaw": 71.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732",
   "backwardYaw": -68.99
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -107.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B468FF20_AE6F_8692_41D3_1C27D1545F86"
},
{
 "initialPosition": {
  "yaw": -153.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 26.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.45,
    "yawSpeed": 91.04,
    "pitchSpeed": 45.81,
    "easing": "cubic_in_out"
   },
   {
    "targetYaw": 90.82,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.82,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_B96A028B_AE6F_9F96_4189_C8EA74B12EDE"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "k3",
 "hfovMin": "150%",
 "id": "panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B03A9433_AD51_72F6_41E4_2DFEC2F65AD6",
  "this.overlay_B08354AD_AD51_1392_41D3_A78AE3601973",
  "this.panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 50.24,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C",
   "backwardYaw": -85.17
  },
  {
   "yaw": -21.35,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1",
   "backwardYaw": 164.38
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_camera"
},
{
 "initialPosition": {
  "yaw": 105.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B725DE45_AE6F_869D_416E_A3F3054F5C44"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "9",
 "hfovMin": "150%",
 "id": "panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B920E426_AB9C_12EB_41DA_65652A91B784",
  "this.overlay_BAAAECC4_AB9C_13AF_41AC_AD2131B81F6F",
  "this.overlay_BAE931C4_AB9C_F5AE_41E0_480E82519834",
  "this.overlay_B9973C75_AB9C_136E_41C4_01EC839C3E92",
  "this.overlay_B9A74E56_AB9C_2EAB_41D5_AFEA064CE081",
  "this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 123.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC",
   "backwardYaw": -67.98
  },
  {
   "yaw": -152.85,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB",
   "backwardYaw": -74.94
  },
  {
   "yaw": 72.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9",
   "backwardYaw": -130.98
  },
  {
   "yaw": -68.99,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6",
   "backwardYaw": 71.52
  },
  {
   "yaw": 163.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834",
   "backwardYaw": -8.26
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -2.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9B0B356_AE6F_9EBF_41C9_15798FAF1265"
},
{
 "initialPosition": {
  "yaw": -131.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9D5C336_AE6F_9EFF_41D1_72EF99352816"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "31",
 "hfovMin": "150%",
 "id": "panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_84DE13C2_AD77_1596_41C9_25CA7390213E",
  "this.overlay_84A1937F_AD77_156E_41D6_B394C48F7E22",
  "this.overlay_875744E6_AD77_139E_41C8_153BF58C9878",
  "this.overlay_8744D64D_AD77_1E92_41AF_90B338B4EA64",
  "this.overlay_8769F7A5_AD77_1D92_41DA_F6388FAA6945",
  "this.overlay_87C8120F_AD77_16AE_41D0_1A9CD1833AA7",
  "this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -176.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25",
   "backwardYaw": 15.06
  },
  {
   "yaw": -109.74,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD",
   "backwardYaw": 79.26
  },
  {
   "yaw": -47.94,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D",
   "backwardYaw": 136.15
  },
  {
   "yaw": 117.74,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8",
   "backwardYaw": -34.85
  },
  {
   "yaw": -143.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3",
   "backwardYaw": 83.79
  },
  {
   "yaw": -83.12,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF",
   "backwardYaw": 100.15
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 66.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9F1CB57_AE6F_8EBD_41DD_ACF61F6F1710"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "22",
 "hfovMin": "150%",
 "id": "panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_A0AB79F8_AD37_1572_41D2_EF3697D7D480",
  "this.overlay_A35C4F71_AD37_2D72_41D7_A8B6CFCB992C",
  "this.overlay_A34C506B_AD37_3296_41D4_77EC7D8E60F7",
  "this.overlay_A3BCE155_AD37_32BD_41E1_744DC71D5794",
  "this.overlay_A3A3D230_AD37_36F2_41CB_DD085DE3C76A",
  "this.overlay_BFB589A2_AD2F_1596_41AF_60FE71B1311C",
  "this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -165.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186",
   "backwardYaw": 35.93
  },
  {
   "yaw": -8.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193",
   "backwardYaw": -160.03
  },
  {
   "yaw": 58.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD",
   "backwardYaw": -79.44
  },
  {
   "yaw": 105.47,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1",
   "backwardYaw": -31.57
  },
  {
   "yaw": 157.83,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B",
   "backwardYaw": -77.8
  },
  {
   "yaw": 106.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B",
   "backwardYaw": -37.3
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -58.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B63863F2_AE6F_9D77_41E3_B447FA33A659"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "7",
 "hfovMin": "150%",
 "id": "panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B9A4D444_A8FF_4E79_41D6_E05C84342B40",
  "this.overlay_B954C6EE_A8FF_CA06_41C7_8D0D1927182E",
  "this.overlay_B95828A4_A8FF_C639_41C6_89F01E1AE428",
  "this.overlay_BBECD1DE_A8FE_C606_4196_68E8D7476D0B",
  "this.overlay_C6EEE9DE_AED3_35AE_41D4_D16E2342AEB2",
  "this.panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 79.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC",
   "backwardYaw": -116.26
  },
  {
   "yaw": -52.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB",
   "backwardYaw": 9.33
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9"
  },
  {
   "yaw": -171.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E",
   "backwardYaw": -86.19
  },
  {
   "yaw": -8.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732",
   "backwardYaw": 163.15
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -135.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B81899D0_AE6F_8DB3_41DC_6C325D0C2774"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_camera"
},
{
 "initialPosition": {
  "yaw": -52.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8275104_AE6F_9A93_4189_C475B3E3F072"
},
{
 "initialPosition": {
  "yaw": -73.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B74AE5C7_AE6F_859E_41E2_B4A23BE5A0C2"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "28",
 "hfovMin": "150%",
 "id": "panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF",
 "class": "Panorama",
 "overlays": [
  "this.overlay_8D21BBE9_AD6F_1592_41AB_BE1CADBF7B06",
  "this.overlay_8DD49203_AD6F_7696_4199_BF76999CCE7B",
  "this.overlay_8DE0F2CE_AD6F_77AE_41D1_71C6316D23AF",
  "this.overlay_8D888426_AD6F_729E_41A7_91565636A17B",
  "this.overlay_8D9284E1_AD6F_7395_41CF_04316BADB4C9",
  "this.overlay_8DE1A868_AD6F_1292_41C8_A2310442F518",
  "this.overlay_E8D843FD_AD33_3572_41C4_F87325C1EA2D",
  "this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 100.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0",
   "backwardYaw": -83.12
  },
  {
   "yaw": 145.56,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25",
   "backwardYaw": -36.48
  },
  {
   "yaw": -135.89,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD",
   "backwardYaw": 49.02
  },
  {
   "yaw": 57.61,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D",
   "backwardYaw": -138.76
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB"
  },
  {
   "yaw": 116.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8",
   "backwardYaw": -59.79
  },
  {
   "yaw": 145.56,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3",
   "backwardYaw": 0.33
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -141.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8C3DA5D_AE6F_8EAD_41D7_FDC97EB5E282"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "r7",
 "hfovMin": "150%",
 "id": "panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B989D68B_AB9C_1FBA_41DE_FBABD39E77A5",
  "this.overlay_B9BA7EA7_AB9C_2FEA_41E0_7A81D5FF7BA4",
  "this.panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 47.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68",
   "backwardYaw": -131.8
  },
  {
   "yaw": -52.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966",
   "backwardYaw": 98.93
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 102.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B96A5AEA_AE6F_8F96_419B_ADBA0AE72588"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "29",
 "hfovMin": "150%",
 "id": "panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_8E82D297_AD71_17BE_41D9_D3E55476B905",
  "this.overlay_896DDB9F_AD71_15AE_41C4_153CAA0828D1",
  "this.overlay_89048C99_AD71_13B2_41D0_8E9CD2145360",
  "this.overlay_8E28C091_AD77_13B2_41CA_59D0CFC1BB21",
  "this.overlay_892331C1_AD77_F595_41C2_BE2517978F61",
  "this.overlay_8E145CB5_AD73_13F2_41D6_1E951667CEF2",
  "this.overlay_EA5CBA9D_AD31_77AD_41E4_38090C87C6E3",
  "this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 136.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0",
   "backwardYaw": -47.94
  },
  {
   "yaw": 163.64,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25",
   "backwardYaw": -8.26
  },
  {
   "yaw": -139.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD",
   "backwardYaw": 47.79
  },
  {
   "yaw": 44.74,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB",
   "backwardYaw": -70.03
  },
  {
   "yaw": 134.18,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8",
   "backwardYaw": -35.04
  },
  {
   "yaw": 175.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3",
   "backwardYaw": 38.38
  },
  {
   "yaw": -138.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF",
   "backwardYaw": 57.61
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 61.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6DE5D1C_AE6F_8AB3_41C9_BD5DDB6501AC"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "a",
 "hfovMin": "150%",
 "id": "panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B2C20E09_ABB4_2EA6_41C0_1B05CCB3B30C",
  "this.overlay_B220C0C2_ABB4_13AB_41E2_2597F6F3D405",
  "this.overlay_B25B228C_ABB4_17BF_41DC_68B286ADDB5B",
  "this.panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 20.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2",
   "backwardYaw": -152.26
  },
  {
   "yaw": 70.7,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588",
   "backwardYaw": -112.17
  },
  {
   "yaw": 176.24,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659",
   "backwardYaw": 67.43
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -171.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B85C8925_AE6F_8A92_41E1_43DEF7B70BE2"
},
{
 "initialPosition": {
  "yaw": 60.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B86AE8F6_AE6F_8B7E_41DF_209B21181868"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "32",
 "hfovMin": "150%",
 "id": "panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8",
 "class": "Panorama",
 "overlays": [
  "this.overlay_80DEE6F5_AD71_1F72_41DD_B57B83F1DB3D",
  "this.overlay_80F0CB1C_AD71_16B2_41C2_68D4AA516AFD",
  "this.overlay_809DBBF6_AD71_157E_41E2_6BA51FC51266",
  "this.overlay_80308F19_AD71_EEB2_41D1_970AD7EB5DBE",
  "this.overlay_80E80820_AD71_1292_41E4_F50291571A04",
  "this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -35.04,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D",
   "backwardYaw": 134.18
  },
  {
   "yaw": -34.85,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0",
   "backwardYaw": 117.74
  },
  {
   "yaw": -123.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25",
   "backwardYaw": 57.2
  },
  {
   "yaw": -83.12,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3",
   "backwardYaw": 122.65
  },
  {
   "yaw": -59.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF",
   "backwardYaw": 116.52
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -122.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8CF1A6D_AE6F_8E92_41D4_066FC132C8BB"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_camera"
},
{
 "initialPosition": {
  "yaw": 171.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9BDBBC4_AE6F_8D93_41E0_CC6FF9666F29"
},
{
 "initialPosition": {
  "yaw": -93.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9346B18_AE6F_8EB3_41C1_08AEA12A6E99"
},
{
 "initialPosition": {
  "yaw": -132.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B426BF6E_AE6F_856F_41AB_3F7306CF0B9C"
},
{
 "initialPosition": {
  "yaw": -179.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B7AD2EE1_AE6F_8795_41C2_08317F0034F6"
},
{
 "initialPosition": {
  "yaw": -15.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6251C61_AE6F_8A92_41D6_B035FFBD235E"
},
{
 "initialPosition": {
  "yaw": -179.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8597077_AE6F_9B7D_41AC_0929FA89656E"
},
{
 "initialPosition": {
  "yaw": 8.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B821D0E5_AE6F_9B9D_41B9_6AFD690D641A"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_camera"
},
{
 "initialPosition": {
  "yaw": 27.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8A8F23C_AE6F_9EF3_41C9_4292C2A21159"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "18",
 "hfovMin": "150%",
 "id": "panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186",
 "class": "Panorama",
 "overlays": [
  "this.overlay_8A6F9AF3_ABAC_176A_41D6_1F6E373D3CF9",
  "this.overlay_89A0F823_ABAC_72E9_41B0_44B2215EE006",
  "this.overlay_89F8A33F_ABAC_16DA_41E4_3AE0614087C6",
  "this.overlay_891778FD_ABAC_135E_41DE_DEA41B6B5084",
  "this.overlay_893D0AB1_ABAC_17E9_41D5_5ABE6C12C7F7",
  "this.overlay_89203CAE_ABAC_13FA_41D6_8C88E8D6CEF4",
  "this.overlay_8A0E77FD_AB94_1D5E_41D6_982918FB278C",
  "this.panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 35.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A",
   "backwardYaw": -165.76
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD"
  },
  {
   "yaw": 177.06,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC",
   "backwardYaw": 26.11
  },
  {
   "yaw": -118.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9",
   "backwardYaw": 33.47
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193"
  },
  {
   "yaw": 89.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B",
   "backwardYaw": -75.76
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_camera"
},
{
 "initialPosition": {
  "yaw": -38.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8BD3A7C_AE6F_8F73_41E5_51A8F1B77C3D"
},
{
 "initialPosition": {
  "yaw": 148.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9A13375_AE6F_9D7D_41C7_1E6570543EA7"
},
{
 "initialPosition": {
  "yaw": 20.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 26.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.45,
    "yawSpeed": 4.42,
    "pitchSpeed": 2.7,
    "easing": "cubic_in_out"
   },
   {
    "targetYaw": 90.82,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.82,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_B4E2DFAC_AE6F_8593_41C7_35C5C7A2ED62"
},
{
 "initialPosition": {
  "yaw": -98.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B64BD3E2_AE6F_9D97_41A5_E090D4886940"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "R0010186",
 "hfovMin": "150%",
 "id": "panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E92C8D9F_AD36_EDAE_41C7_350C3A1386B3",
  "this.overlay_E9E1281D_AD31_32B2_41E1_B1F7E46370A0",
  "this.panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 4.83,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704",
   "backwardYaw": 145.56
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -34.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B612CC80_AE6F_8B93_41D0_B04C6A5DB00D"
},
{
 "initialPosition": {
  "yaw": 105.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B79DFEF1_AE6F_8775_41BF_ED1AAF4D8FC1"
},
{
 "initialPosition": {
  "yaw": 106.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B857F915_AE6F_8ABD_41B2_F2462E388698"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "r4",
 "hfovMin": "150%",
 "id": "panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196",
 "class": "Panorama",
 "overlays": [
  "this.overlay_A44AB054_AB94_12AF_41D3_A3CCAFB20AB9",
  "this.overlay_BBD06147_AB94_F2AA_41E2_14D50D3DBBBE",
  "this.overlay_BBEAA2E2_AB94_F76A_41E0_23620BA77D4D",
  "this.overlay_A5C49254_AB94_76AE_41E3_B23FF732D0AD",
  "this.panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 40.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB",
   "backwardYaw": 121.43
  },
  {
   "yaw": 84.61,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94",
   "backwardYaw": -142.03
  },
  {
   "yaw": -88.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68",
   "backwardYaw": 95.24
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_camera"
},
{
 "initialPosition": {
  "yaw": -3.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B83EA992_AE6F_8DB7_41B6_0CB6CEF82668"
},
{
 "initialPosition": {
  "yaw": 31.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9ADABD4_AE6F_8DB3_41DD_9E1FF76298CB"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_camera"
},
{
 "initialPosition": {
  "yaw": 2.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B98FA3A4_AE6F_9D93_41E3_4144AEFEC6C8"
},
{
 "initialPosition": {
  "yaw": -22.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B769BDF7_AE6F_857D_41E4_98435981BE7F"
},
{
 "initialPosition": {
  "yaw": -130.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B7DF1EA3_AE6F_8796_41D8_B99FCF2923E7"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "a6",
 "hfovMin": "150%",
 "id": "panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B0B9E66A_ABB4_3F7A_41D0_83BDA08D300F",
  "this.overlay_B0E03887_ABB4_13A9_41E1_D866BB02B44E",
  "this.overlay_B05D0F44_ABB4_EEAF_41B0_287382B1150D",
  "this.panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -45.89,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2",
   "backwardYaw": 163.97
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659"
  },
  {
   "yaw": -112.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24",
   "backwardYaw": 70.7
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -102.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9CC5BA5_AE6F_8D9D_41C6_5445119AE051"
},
{
 "initialPosition": {
  "yaw": 158.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B84870A6_AE6F_9B9F_41D4_0C9A2152C0ED"
},
{
 "initialPosition": {
  "yaw": -100.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B67D13B3_AE6F_9DF5_41AE_FC2B745A1E35"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_camera"
},
{
 "initialPosition": {
  "yaw": 48.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B920D2D9_AE6F_9FB5_41E1_CDE18077FF0E"
},
{
 "initialPosition": {
  "yaw": 111.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B4F22F9D_AE6F_85B2_41E0_A2642E5DD4F7"
},
{
 "initialPosition": {
  "yaw": -16.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B84FF963_AE6F_8A95_41D4_71F287A2EE0F"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "r5",
 "hfovMin": "150%",
 "id": "panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BB567B78_AB94_1566_41C1_9B2101813CCA",
  "this.overlay_BAA8E6A2_AB94_1FEB_41B5_E2015C37C039",
  "this.overlay_BAC33859_AB94_1359_41D2_EEBFC0CC1D40",
  "this.panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 95.24,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196",
   "backwardYaw": -88.03
  },
  {
   "yaw": -78.21,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966",
   "backwardYaw": 44.11
  },
  {
   "yaw": -131.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963",
   "backwardYaw": 47.79
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_camera"
  },
  {
   "media": "this.panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_camera"
  },
  {
   "media": "this.panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_camera"
  },
  {
   "media": "this.panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_camera"
  },
  {
   "media": "this.panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_camera"
  },
  {
   "media": "this.panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_camera"
  },
  {
   "media": "this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_camera"
  },
  {
   "media": "this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_camera"
  },
  {
   "media": "this.panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_camera"
  },
  {
   "media": "this.panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_camera"
  },
  {
   "media": "this.panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_camera"
  },
  {
   "media": "this.panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_camera"
  },
  {
   "media": "this.panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_camera"
  },
  {
   "media": "this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_camera"
  },
  {
   "media": "this.panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_camera"
  },
  {
   "media": "this.panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_camera"
  },
  {
   "media": "this.panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_camera"
  },
  {
   "media": "this.panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_camera"
  },
  {
   "media": "this.panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_camera"
  },
  {
   "media": "this.panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_camera"
  },
  {
   "media": "this.panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_camera"
  },
  {
   "media": "this.panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_camera"
  },
  {
   "media": "this.panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_camera"
  },
  {
   "media": "this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_camera"
  },
  {
   "media": "this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_camera"
  },
  {
   "media": "this.panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_camera"
  },
  {
   "media": "this.panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_camera"
  },
  {
   "media": "this.panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_camera"
  },
  {
   "media": "this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_camera"
  },
  {
   "media": "this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_camera"
  },
  {
   "media": "this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_camera"
  },
  {
   "media": "this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_camera"
  },
  {
   "media": "this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_camera"
  },
  {
   "media": "this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_camera"
  },
  {
   "media": "this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_camera"
  },
  {
   "media": "this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_camera"
  },
  {
   "media": "this.panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_camera"
  },
  {
   "media": "this.panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_camera"
  },
  {
   "media": "this.panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_camera"
  },
  {
   "media": "this.panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_camera"
  },
  {
   "media": "this.panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_camera"
  },
  {
   "media": "this.panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_camera"
  },
  {
   "media": "this.panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_camera"
  },
  {
   "media": "this.panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_camera"
  },
  {
   "media": "this.panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_camera"
  },
  {
   "media": "this.panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_camera"
  },
  {
   "media": "this.panorama_B9843975_A8CD_461B_41B2_35B5B7794B81",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_camera"
  },
  {
   "media": "this.panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -45.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8D421DF_AE6F_9DAD_41C7_2E46098A4F84"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "x",
 "hfovMin": "150%",
 "id": "panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_95E67DBC_AD51_6DF2_41E5_413D618995FB",
  "this.overlay_95A620B7_AD51_13FE_41D0_3A0BB02F375B",
  "this.overlay_9588027C_AD51_1772_417E_6D7646AFBA17",
  "this.overlay_96E21463_AD51_3296_41D2_2EDCEE35CC84",
  "this.overlay_ED10544F_AD37_32AE_41DF_D2851C40E83D",
  "this.overlay_E8D85A0C_AD31_7692_41CE_C13DCDCF0B26",
  "this.panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704"
  },
  {
   "yaw": 69.47,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6",
   "backwardYaw": 177.88
  },
  {
   "yaw": -82.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4",
   "backwardYaw": 61.29
  },
  {
   "yaw": -148.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193",
   "backwardYaw": 7.7
  },
  {
   "yaw": 11.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498",
   "backwardYaw": 165.61
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "r6",
 "hfovMin": "150%",
 "id": "panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BA05329C_AB9C_17DE_41A8_B0F64C8892E9",
  "this.overlay_BA7DF563_AB9C_1D6A_41E1_FB5EA706F452",
  "this.panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 44.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68",
   "backwardYaw": -78.21
  },
  {
   "yaw": 98.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963",
   "backwardYaw": -52.03
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_camera"
},
{
 "initialPosition": {
  "yaw": 171.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B7F39E74_AE6F_8773_41DE_D2C76310767B"
},
{
 "initialPosition": {
  "yaw": 66.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6A3B4FC_AE6F_9B72_41C8_E1CC23ABD7BC"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "R0010183",
 "hfovMin": "150%",
 "id": "panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704",
 "class": "Panorama",
 "overlays": [
  "this.overlay_EF01ACC4_AD31_3392_41D2_C8ED89FF0272",
  "this.overlay_EEC9C52B_AD31_1296_41E2_AA09CD25343E",
  "this.panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -136.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6",
   "backwardYaw": -2.3
  },
  {
   "yaw": 145.56,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3",
   "backwardYaw": 4.83
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "33",
 "hfovMin": "150%",
 "id": "panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9D4321BB_AD53_75F6_41DE_D7821A85CFB9",
  "this.overlay_9D3718A0_AD53_7393_41D4_B638C18626A1",
  "this.overlay_9D0D99E9_AD53_7592_41E4_DBE935FB6A8F",
  "this.overlay_9DE3DB40_AD53_7692_41E5_31A47EE41ED3",
  "this.overlay_9DF82CD7_AD53_73BE_41D3_82F6AA4FCCA5",
  "this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -8.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D",
   "backwardYaw": 163.64
  },
  {
   "yaw": 15.06,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0",
   "backwardYaw": -176.39
  },
  {
   "yaw": 57.2,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8",
   "backwardYaw": -123.62
  },
  {
   "yaw": -35.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3",
   "backwardYaw": 176.24
  },
  {
   "yaw": -36.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF",
   "backwardYaw": 145.56
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -74.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B85E9087_AE6F_9B9D_41DB_2353B2A5C129"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_camera"
},
{
 "initialPosition": {
  "yaw": 91.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B4488F4F_AE6F_86AE_41A9_AF67134C4EBC"
},
{
 "initialPosition": {
  "yaw": 157.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 26.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.45,
    "yawSpeed": 66.48,
    "pitchSpeed": 33.59,
    "easing": "cubic_in_out"
   },
   {
    "targetYaw": 90.82,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.82,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_B6BC5D6A_AE6F_8A97_41CD_C79B1438BB9A"
},
{
 "initialPosition": {
  "yaw": -14.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6D0DCFD_AE6F_8B6D_41B1_C8041EAEABF6"
},
{
 "initialPosition": {
  "yaw": 3.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8323973_AE6F_8D76_41DE_4350E5C74BC5"
},
{
 "initialPosition": {
  "yaw": 96.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B80E1171_AE6F_9D75_41E0_9493FC31D15F"
},
{
 "initialPosition": {
  "yaw": 127.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B970C26B_AE6F_9E95_41E4_51BA6ACFFF81"
},
{
 "initialPosition": {
  "yaw": -51.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B83180B6_AE6F_9BFF_41E2_3CBC2131D3D1"
},
{
 "initialPosition": {
  "yaw": -34.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B82469A2_AE6F_8D96_41E0_C6A14BB9DCB0"
},
{
 "initialPosition": {
  "yaw": 43.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B66D83C3_AE6F_9D95_41D8_5AFAB5CACD6B"
},
{
 "initialPosition": {
  "yaw": -51.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B78B7F00_AE6F_8693_41E3_B75F7CBF9CEC"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "R0010190",
 "hfovMin": "150%",
 "id": "panorama_B9843975_A8CD_461B_41B2_35B5B7794B81",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E4FAAAFF_ADD3_F76E_41E4_3945761ADED5",
  "this.panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -74.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343",
   "backwardYaw": 103.43
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -129.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B813B123_AE6F_9A95_41DB_D2306D2A8964"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "k2",
 "hfovMin": "150%",
 "id": "panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B1CAB558_AD53_12B2_41D0_9627997DAC4E",
  "this.overlay_B1A8EE40_AD53_6E92_41D0_7A0068998BAA",
  "this.panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -85.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E",
   "backwardYaw": 50.24
  },
  {
   "yaw": -5.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1",
   "backwardYaw": 128.38
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -84.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6163421_AE6F_9A95_41DD_BB9BB3866097"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_camera"
},
{
 "initialPosition": {
  "yaw": -81.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B92FF2E8_AE6F_9F93_41E1_4EF86E07DEA0"
},
{
 "initialPosition": {
  "yaw": -175.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9EF2B86_AE6F_8D9F_41C8_CFAB1C1CE3A4"
},
{
 "initialPosition": {
  "yaw": 101.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B82B39B1_AE6F_8DF5_41BC_034CAB651ED6"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_camera"
},
{
 "initialPosition": {
  "yaw": 49.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B715AE55_AE6F_86B2_41DE_8E019BBB6DA7"
},
{
 "initialPosition": {
  "yaw": -129.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8E9E1BF_AE6F_9DED_41DD_C323DB248F83"
},
{
 "initialPosition": {
  "yaw": -100.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6F4445F_AE6F_9AAD_41AA_9A699D296548"
},
{
 "initialPosition": {
  "yaw": 70.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B91D42F8_AE6F_9F73_41D0_61064C534051"
},
{
 "initialPosition": {
  "yaw": -131.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B404BF8D_AE6F_85AD_41E1_672B22E8C208"
},
{
 "initialPosition": {
  "yaw": 145.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6D2549E_AE6F_9BAF_41E1_2061DB99E16B"
},
{
 "initialPosition": {
  "yaw": -66.08,
  "class": "PanoramaCameraPosition",
  "pitch": 2.43
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_camera"
},
{
 "initialPosition": {
  "yaw": -164.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B75A05B7_AE6F_85FD_41BC_6104A341F313"
},
{
 "initialPosition": {
  "yaw": -164.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B607A440_AE6F_9A93_41E3_3B411EF78E4F"
},
{
 "initialPosition": {
  "yaw": 96.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8502905_AE6F_8A9D_41C5_BEFB56F5F55B"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "x3",
 "hfovMin": "150%",
 "id": "panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_EDB1BD7C_AD33_ED72_41E2_0ECC06491774",
  "this.overlay_EFE32C75_AD3F_1372_417C_3F00A513A584",
  "this.overlay_EFBEAAEC_AD3F_F792_4192_9F06A2B09822",
  "this.panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -171.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF",
   "backwardYaw": -11.86
  },
  {
   "yaw": -119.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5",
   "backwardYaw": 72.41
  },
  {
   "yaw": 61.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A",
   "backwardYaw": -82.71
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 144.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8D50A3E_AE6F_8EEF_41E2_3B5B718301C4"
},
{
 "initialPosition": {
  "yaw": -63.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8BC621D_AE6F_9EAD_41E0_3BD94BD12492"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "19",
 "hfovMin": "150%",
 "id": "panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_8F5547BC_AB9C_1DDF_41D4_17109468811F",
  "this.overlay_8C83A8EC_AB9C_F37F_41D3_843C4E5F3B01",
  "this.overlay_8C3E1598_AB9C_3DA7_41D9_A95D7C973BD3",
  "this.overlay_8FF5FD8D_AB9C_2DBE_41D9_F9170FF76D04",
  "this.overlay_8F755B57_AB9C_16AA_4195_92FDF38A8787",
  "this.overlay_C3BF1F61_AEF3_2E92_41B3_9CA7E8C8D1EE",
  "this.panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -177.21,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC",
   "backwardYaw": 69.88
  },
  {
   "yaw": -77.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A",
   "backwardYaw": 157.83
  },
  {
   "yaw": -41.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A",
   "backwardYaw": 157.83
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD"
  },
  {
   "yaw": 15.06,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B",
   "backwardYaw": -146.12
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "R0010188",
 "hfovMin": "150%",
 "id": "panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343",
 "class": "Panorama",
 "overlays": [
  "this.overlay_EA425431_ADD2_F2F2_41E3_1C7EFA1AC8C3",
  "this.overlay_EA79D3D0_ADD1_35B2_41C8_BF37CF632099",
  "this.panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 103.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9843975_A8CD_461B_41B2_35B5B7794B81",
   "backwardYaw": -74.37
  },
  {
   "yaw": -73.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67",
   "backwardYaw": 128.79
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 8.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B855D058_AE6F_9AB3_41AF_5294BBC7B9BF"
},
{
 "initialPosition": {
  "yaw": -109.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B83AB0D5_AE6F_9BBD_41D5_5F9E698D8962"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "brm",
 "hfovMin": "150%",
 "id": "panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9B2FC703_AD5F_3E96_41E4_C46A2C0D5FD8",
  "this.overlay_9BCDCE63_AD5F_EE96_41CC_2215D43B6C44",
  "this.overlay_9BA7F028_AD5F_1292_41E3_961FAF22B9A7",
  "this.overlay_9BB171ED_AD5F_1592_41BB_73AE50F4D8B7",
  "this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6"
  },
  {
   "yaw": -160.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A",
   "backwardYaw": -8.44
  },
  {
   "yaw": 7.7,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A",
   "backwardYaw": -148.76
  },
  {
   "yaw": 8.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498",
   "backwardYaw": 158.06
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 44.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B77C0588_AE6F_8593_41E1_6B8676450015"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_camera"
},
{
 "initialPosition": {
  "yaw": -122.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8C4E1FE_AE6F_9D6F_41D5_0666B332E576"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "24",
 "hfovMin": "150%",
 "id": "panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BEC6E160_AD52_F292_41CA_E1FB6C2094C2",
  "this.overlay_B95BE1E8_AD53_3592_41D7_CE47A1BDAC05",
  "this.overlay_B974C36F_AD53_356E_41D9_983698D86DBB",
  "this.overlay_B90F74A7_AD53_339E_41B2_6506552E6BA9",
  "this.overlay_BFCBA62E_AD53_3EEE_4156_850F74784820",
  "this.overlay_BFA59AEA_AD53_7796_41D7_5ED575851CC7",
  "this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -75.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186",
   "backwardYaw": 89.52
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193"
  },
  {
   "yaw": 48.61,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD",
   "backwardYaw": -135.89
  },
  {
   "yaw": 128.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1",
   "backwardYaw": -30.35
  },
  {
   "yaw": -146.12,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B",
   "backwardYaw": 15.06
  },
  {
   "yaw": -37.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A",
   "backwardYaw": 106.29
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -90.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B68EF569_AE6F_9A95_41D7_C5A3C9C7714E"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "x4",
 "hfovMin": "150%",
 "id": "panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5",
 "class": "Panorama",
 "overlays": [
  "this.overlay_ECA95C6A_AD31_1296_41D5_82504E403BA0",
  "this.overlay_EE9C12F3_AD32_F776_41DA_98AD7C857137",
  "this.panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 72.41,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4",
   "backwardYaw": -119.53
  },
  {
   "yaw": 127.97,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF",
   "backwardYaw": -83.12
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 120.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B7BFBED2_AE6F_87B6_41E0_CDE02ADD7F06"
},
{
 "initialPosition": {
  "yaw": -16.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6476C32_AE6F_8AF6_41B5_9FEE4317E43B"
},
{
 "initialPosition": {
  "yaw": 174.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8421097_AE6F_9BBE_41D7_0A438F22C546"
},
{
 "initialPosition": {
  "yaw": 109.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8E71A2E_AE6F_8EEF_41CE_FE645C14BB97"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_camera"
},
{
 "initialPosition": {
  "yaw": -110.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 26.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.45,
    "yawSpeed": 69.21,
    "pitchSpeed": 34.95,
    "easing": "cubic_in_out"
   },
   {
    "targetYaw": 90.82,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.82,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_B69A4DA9_AE6F_8592_419C_3D35383DED6D"
},
{
 "initialPosition": {
  "yaw": 36.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B819F133_AE6F_9AF5_41C1_BA1ADE5429A7"
},
{
 "initialPosition": {
  "yaw": -115.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B691B52A_AE6F_9A97_41A7_76AA3A61035A"
},
{
 "initialPosition": {
  "yaw": -62.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8DCE1EE_AE6F_9D6F_41DB_2DA194D6EB11"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "x5",
 "hfovMin": "150%",
 "id": "panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF",
 "class": "Panorama",
 "overlays": [
  "this.overlay_ECB97E15_AD33_6EB2_41C9_4FC56387D234",
  "this.overlay_EE35A1B6_AD33_15FE_41DF_488F6920259E",
  "this.overlay_EF3B2113_AD33_12B6_41E0_E78336C4794A",
  "this.panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -11.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4",
   "backwardYaw": -171.07
  },
  {
   "yaw": -83.12,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5",
   "backwardYaw": 127.97
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "x2",
 "hfovMin": "150%",
 "id": "panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_90DEE79F_AD31_1DAE_41CE_209A19E6C746",
  "this.overlay_90ADF182_AD31_F596_41E0_A2B2F16C7DEC",
  "this.overlay_EFF5A8FE_AD37_336E_41CC_74D8189482FA",
  "this.overlay_EF183595_AD33_7DB2_41E3_1931E63A7F21",
  "this.panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -2.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704",
   "backwardYaw": -136.08
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4"
  },
  {
   "yaw": 177.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A",
   "backwardYaw": 69.47
  },
  {
   "yaw": -164.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498",
   "backwardYaw": 81.33
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 15.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B82A3114_AE6F_9AB2_41D8_4653D55E591C"
},
{
 "initialPosition": {
  "yaw": -43.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6E4547F_AE6F_9B6E_41D5_6CB3CC702528"
},
{
 "initialPosition": {
  "yaw": 27.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9250B28_AE6F_8E93_41D9_FE79E0FC6CBE"
},
{
 "initialPosition": {
  "yaw": 56.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B83B8982_AE6F_8D97_41E1_50FFFF658884"
},
{
 "initialPosition": {
  "yaw": -51.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8023152_AE6F_9AB7_41DE_66A118DD0DDA"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "34",
 "hfovMin": "150%",
 "id": "panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9EE5EBC2_AD53_1596_41C8_C40FED38ECA6",
  "this.overlay_9EBC50C1_AD53_1392_41D7_E420A6F65B5D",
  "this.overlay_9E8A4286_AD53_179E_41E1_C07B67DB2FA7",
  "this.overlay_9960F43B_AD53_12F6_41DD_39E7E8258BCC",
  "this.overlay_9979E5C2_AD53_1D96_41D1_A6725DC53375",
  "this.overlay_995397B6_AD53_1DFE_41D1_494E390E4CA4",
  "this.overlay_E835ABC2_AD31_1596_41E4_C36BF15BCB62",
  "this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 83.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0",
   "backwardYaw": -143.26
  },
  {
   "yaw": 176.24,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25",
   "backwardYaw": -35.26
  },
  {
   "yaw": -35.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD",
   "backwardYaw": 128.38
  },
  {
   "yaw": 38.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D",
   "backwardYaw": 175.43
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB"
  },
  {
   "yaw": 122.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8",
   "backwardYaw": -83.12
  },
  {
   "yaw": 0.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF",
   "backwardYaw": 145.56
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -34.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8F5F181_AE6F_9D95_41DE_68F82A60D388"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_camera"
},
{
 "initialPosition": {
  "yaw": -95.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8A95A8C_AE6F_8F93_41DC_C2B299D322A6"
},
{
 "initialPosition": {
  "yaw": 104.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B93352B9_AE6F_9FF5_41DB_38BDD747EC6E"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "8",
 "hfovMin": "150%",
 "id": "panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BB3B3EA7_A8DD_5A07_41DF_F8F7DC1A85F4",
  "this.overlay_BB1E1212_A8DD_4A19_41D6_7C097439736C",
  "this.overlay_BCFBA8D8_A8DD_460A_41E2_F7E67B135419",
  "this.overlay_BCD95B2A_A8DD_7A09_41D7_0FC47280481D",
  "this.overlay_BCBBECFF_A8DD_7E07_41DB_B53421C971D8",
  "this.overlay_BA14A0CD_A8DA_C60B_41D7_69BC7BD61D3F",
  "this.overlay_BB549C22_A8DB_5E39_41B7_28D33D670214",
  "this.overlay_B9092ED1_A8DB_5A1A_41BD_6467ECDE0F87",
  "this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB"
  },
  {
   "yaw": 26.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186",
   "backwardYaw": 177.06
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6"
  },
  {
   "yaw": -159.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E",
   "backwardYaw": -31.98
  },
  {
   "yaw": -67.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732",
   "backwardYaw": 123.88
  },
  {
   "yaw": -22.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9",
   "backwardYaw": 138.2
  },
  {
   "yaw": 69.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B",
   "backwardYaw": -177.21
  },
  {
   "yaw": -116.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834",
   "backwardYaw": 79.29
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 19.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B882BAAB_AE6F_8F95_41BE_2DC406C95655"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_camera"
},
{
 "initialPosition": {
  "yaw": 144.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9E6B327_AE6F_9E9D_41E3_BA3C7606BE83"
},
{
 "initialPosition": {
  "yaw": 100.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9709ABB_AE6F_8FF5_41A0_DD6617AC15F4"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_camera"
},
{
 "initialPosition": {
  "yaw": 94.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B6357C41_AE6F_8A95_41C1_BFC3BB032833"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "r2",
 "hfovMin": "150%",
 "id": "panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BC78E570_A8CF_CE19_41DD_DEECBD96ADCF",
  "this.overlay_BDF9800F_A8CF_C607_41C8_190A13388B0F",
  "this.overlay_BDE7E2E0_A8CF_CA39_41C3_5070A76E22DE",
  "this.overlay_BDD525B2_A8CF_CE1E_41DD_97371D928EAE",
  "this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -74.94,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732",
   "backwardYaw": -152.85
  },
  {
   "yaw": 141.47,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94",
   "backwardYaw": 20.2
  },
  {
   "yaw": 121.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196",
   "backwardYaw": 40.65
  },
  {
   "yaw": 9.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834",
   "backwardYaw": -52.62
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -110.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B65B33D3_AE6F_9DB6_41D5_C722783BC80A"
},
{
 "initialPosition": {
  "yaw": 8.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9DFDB95_AE6F_8DBD_41B3_EF1471EB0CB6"
},
{
 "initialPosition": {
  "yaw": 112.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 26.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.45,
    "yawSpeed": 43.63,
    "pitchSpeed": 22.22,
    "easing": "cubic_in_out"
   },
   {
    "targetYaw": 90.82,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.82,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_B747CE26_AE6F_869E_4183_4A0474607966"
},
{
 "initialPosition": {
  "yaw": 144.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B81CA142_AE6F_9A97_41E3_F8EC5BA7F34C"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "5",
 "hfovMin": "150%",
 "id": "panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B9DE9FA7_A8CF_7A06_41BB_0ECDEF0256D7",
  "this.overlay_B9E2DE4E_A8CF_7A09_41BA_6562E9785310",
  "this.panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -171.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D",
   "backwardYaw": -8.67
  },
  {
   "yaw": 0.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E",
   "backwardYaw": 86.65
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 44.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9C36346_AE6F_9E9F_41D5_9779E1C38D32"
},
{
 "initialPosition": {
  "yaw": 168.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B47B7F10_AE6F_86B3_41E1_D839EEE4EA8A"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_camera"
},
{
 "initialPosition": {
  "yaw": 127.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B810F9C1_AE6F_8D95_41DE_AE244C85EED9"
},
{
 "initialPosition": {
  "yaw": 142.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B95B1AF9_AE6F_8F75_41DE_49668ED7CE9C"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "12",
 "hfovMin": "150%",
 "id": "panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BCAC4A8E_ABAC_17BA_41DC_ADB8F50AA910",
  "this.overlay_BCF010FB_ABAC_135A_41CD_BACA6DC28397",
  "this.overlay_BE6B48EE_ABAC_737A_4191_52917BB5DA24",
  "this.panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 48.01,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6",
   "backwardYaw": -86.39
  },
  {
   "yaw": 64.56,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659",
   "backwardYaw": -75.76
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 40.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9F90317_AE6F_9EBD_41DB_F69893AA5EC8"
},
{
 "initialPosition": {
  "yaw": 143.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B7D1BE93_AE6F_87B5_41DE_17E1AE31384D"
},
{
 "initialPosition": {
  "yaw": 93.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B656DC22_AE6F_8A97_41E4_17FF56969763"
},
{
 "initialPosition": {
  "yaw": -159.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B896B24C_AE6F_9E93_41C4_5922C1F795A5"
},
{
 "initialPosition": {
  "yaw": 63.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 26.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.45,
    "yawSpeed": 19.57,
    "pitchSpeed": 10.24,
    "easing": "cubic_in_out"
   },
   {
    "targetYaw": 90.82,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.82,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_B98B3BF3_AE6F_8D75_41C0_3F30B566C577"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_camera"
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "k1",
 "hfovMin": "150%",
 "id": "panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B4A93678_AD5F_1F72_41C7_C7E95F497442",
  "this.overlay_B767FD7C_AD5F_2D72_41C4_FACA080A7449",
  "this.overlay_B771FE48_AD5F_2E92_41E5_89752EA083A5",
  "this.overlay_B6AAB540_AD5F_F292_419E_419EFF0F435A",
  "this.overlay_B71BCDB2_AD5F_6DF6_41DA_2BCDF855A422",
  "this.panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -31.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A",
   "backwardYaw": 105.47
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193"
  },
  {
   "yaw": 128.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C",
   "backwardYaw": -5.39
  },
  {
   "yaw": 164.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E",
   "backwardYaw": -21.35
  },
  {
   "yaw": -30.35,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B",
   "backwardYaw": 128.79
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_camera"
},
{
 "initialPosition": {
  "yaw": 15.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8402934_AE6F_8AF3_41D4_1A4227B6DCEA"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_camera"
},
{
 "initialPosition": {
  "yaw": 132.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B807A9FF_AE6F_8D6D_41E0_3503DAD1C4F3"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "27",
 "hfovMin": "150%",
 "id": "panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B3E8BFE6_AD57_6D9E_41D4_1333727CA1CE",
  "this.overlay_B3F10228_AD57_7692_41D7_D34BA0EA4B27",
  "this.overlay_B399E42B_AD57_7296_41E3_C1706E5D1CFC",
  "this.overlay_B3A1961F_AD57_7EAE_41B4_008DB454A7E0",
  "this.overlay_B30231BE_AD51_F5EE_41E0_F7280A77E254",
  "this.overlay_EB4FE5A3_AD2F_1D96_41B1_D4877F27F450",
  "this.overlay_EBDD4E96_AD2F_EFBF_41B0_8C329BCCB4CD",
  "this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 79.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0",
   "backwardYaw": -109.74
  },
  {
   "yaw": -79.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A",
   "backwardYaw": 58.02
  },
  {
   "yaw": 47.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D",
   "backwardYaw": -139.57
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB"
  },
  {
   "yaw": 128.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3",
   "backwardYaw": -35.67
  },
  {
   "yaw": -135.89,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B",
   "backwardYaw": 48.61
  },
  {
   "yaw": 49.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF",
   "backwardYaw": -135.89
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "R0010185",
 "hfovMin": "150%",
 "id": "panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E07E7037_ADF1_72FD_41DA_2C27E2EA5D4D",
  "this.overlay_E3BA01BB_ADF1_15F5_41CF_7BEF8B0F8010",
  "this.panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704"
  },
  {
   "yaw": -70.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D",
   "backwardYaw": 44.74
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -21.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B99BDBE4_AE6F_8D92_41DE_3ADC2D923E58"
},
{
 "initialPosition": {
  "yaw": 67.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9133B38_AE6F_8EF3_41D4_9DD3A11278E2"
},
{
 "initialPosition": {
  "yaw": 93.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8FAB1A0_AE6F_9D93_41E4_93BD3618FF4B"
},
{
 "initialPosition": {
  "yaw": -22.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B77B8DE7_AE6F_859D_41CE_9A645127DD31"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "R0010127",
 "hfovMin": "150%",
 "id": "panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FEC36201_AD71_1692_41D0_2B931CAEE04D",
  "this.overlay_FE5F1B74_AD71_3572_41E2_BF1AEB972FFC",
  "this.panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 77.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D",
   "backwardYaw": -164.53
  },
  {
   "yaw": -113.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26",
   "backwardYaw": 50.04
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "R0010187",
 "hfovMin": "150%",
 "id": "panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67",
 "class": "Panorama",
 "overlays": [
  "this.overlay_EB9BF4CA_ADD1_F396_41C7_3C0D819C611F",
  "this.overlay_E5D3549E_ADD3_73AE_41D6_B585A221A0A8",
  "this.panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC"
  },
  {
   "yaw": 128.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343",
   "backwardYaw": -73.71
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "6",
 "hfovMin": "150%",
 "id": "panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B954E5D6_A8CD_CE06_41D0_500B6B2D9642",
  "this.overlay_B903812B_A8CD_460F_41C5_DCADA51D404C",
  "this.overlay_B92BD542_A8CD_4E79_41B4_6AEB54BB0BD5",
  "this.overlay_BAC7896A_A8CD_4609_41E5_0BB3EAA2378A",
  "this.panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -31.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC",
   "backwardYaw": -159.8
  },
  {
   "yaw": -86.19,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834",
   "backwardYaw": -171.48
  },
  {
   "yaw": 86.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6",
   "backwardYaw": 0.15
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 33.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B759BE16_AE6F_86BF_41CE_083E846E450B"
},
{
 "initialPosition": {
  "yaw": 134.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B86158C7_AE6F_8B9D_41B1_1939F737FD18"
},
{
 "initialPosition": {
  "yaw": 171.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B9460B09_AE6F_8E95_41BC_015DD6C6A305"
},
{
 "initialPosition": {
  "yaw": -76.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B81F59F0_AE6F_8D72_41E1_46AED3C58A7B"
},
{
 "initialPosition": {
  "yaw": 104.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_B8E301B0_AE6F_9DF3_41E0_D81A475167DD"
},
{
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadWidth": 6,
 "width": 1104,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "class": "ViewerArea",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "minHeight": 50,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "transitionDuration": 500,
 "playbackBarProgressBorderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 100,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "borderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "shadow": false,
 "toolTipFontColor": "#FFFFFF",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 55,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 10,
 "transitionMode": "blending",
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "toolTipShadowSpread": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": 13,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "paddingLeft": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "width": 115.05,
 "class": "Container",
 "right": "0%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "propagateClick": true,
 "height": 641,
 "gap": 10,
 "borderSize": 0,
 "top": "0%",
 "paddingTop": 0,
 "overflow": "scroll",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "paddingLeft": 0,
 "data": {
  "name": "--SETTINGS"
 }
},
{
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "width": 573,
 "class": "Container",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "propagateClick": true,
 "height": 133,
 "gap": 10,
 "borderSize": 0,
 "top": 15,
 "overflow": "visible",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "paddingLeft": 0,
 "data": {
  "name": "--STICKER"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "class": "Container",
 "right": "0%",
 "backgroundOpacity": 0.64,
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "bottom": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "propagateClick": true,
 "height": 118,
 "gap": 10,
 "borderSize": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "paddingLeft": 0,
 "data": {
  "name": "--MENU"
 }
},
{
 "paddingLeft": 0,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "class": "Container",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "borderSize": 0,
 "top": "0%",
 "gap": 10,
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "--LOCATION"
 }
},
{
 "paddingLeft": 0,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "class": "Container",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "borderSize": 0,
 "top": "0%",
 "gap": 10,
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "--REALTOR"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "center",
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "propagateClick": true,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "horizontalAlign": "center",
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "propagateClick": true,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -161.03,
   "hfov": 13.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CCE001_ADEF_3292_41D2_BEB189C278A8",
   "yaw": -161.03,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.65,
   "hfov": 13.35,
   "distance": 100
  }
 ],
 "id": "overlay_B7DC26EA_ABBC_3F7A_41E0_D23EB0051D01",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -115.62,
   "hfov": 13.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CB4001_ADEF_3292_41C8_193CB9456C16",
   "yaw": -115.62,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.88,
   "hfov": 13.32,
   "distance": 100
  }
 ],
 "id": "overlay_B706AF7D_ABBD_ED5E_41C8_FFA5A0BA6A15",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 33.47,
   "hfov": 26.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186, this.camera_B6DE5D1C_AE6F_8AB3_41C9_BD5DDB6501AC); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CBB001_ADEF_3292_41DB_7DC09E6116CF",
   "yaw": 33.47,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.82,
   "hfov": 26.64,
   "distance": 100
  }
 ],
 "id": "overlay_B7D1A35E_ABBC_755A_41C0_B1D723E726BA",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -130.98,
   "hfov": 22.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732, this.camera_B6CE4D4B_AE6F_8A95_41D3_1DEEE9D93A51); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CA2001_ADEF_3292_41DF_8DB9899200AD",
   "yaw": -130.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -42.55,
   "hfov": 22.19,
   "distance": 100
  }
 ],
 "id": "overlay_B7387B84_ABBC_15AF_41C5_77E4FF96C4F1",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 83.79,
   "hfov": 26.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CCE001_ADEF_3292_41DE_0C036C35D5D8",
   "yaw": 83.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.41,
   "hfov": 26.74,
   "distance": 100
  }
 ],
 "id": "overlay_B7774677_ABBC_3F69_41D2_395D037F9941",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 138.2,
   "hfov": 23.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC, this.camera_B6BC5D6A_AE6F_8A97_41CD_C79B1438BB9A); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CB7001_ADEF_3292_41C4_5550F729645D",
   "yaw": 138.2,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.45,
   "hfov": 23.59,
   "distance": 100
  }
 ],
 "id": "overlay_B6817ECC_ABBC_2FBE_41D5_C6A63CCD045F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 172.79,
   "hfov": 13.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CBB001_ADEF_3292_41D6_6AB9DCA47AFD",
   "yaw": 172.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.2,
   "hfov": 13.38,
   "distance": 100
  }
 ],
 "id": "overlay_B7D26F26_ABBC_6EEA_41C4_67B3D7859AA4",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 131.88,
   "hfov": 13.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6, this.camera_B6A3B4FC_AE6F_9B72_41C8_E1CC23ABD7BC); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD455BD3_AED1_75B6_41B4_D989375073DD",
   "yaw": 131.88,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -8.33,
   "hfov": 13.25,
   "distance": 100
  }
 ],
 "id": "overlay_BE987306_ABAB_F6AA_41D8_45E2E34E5894",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 67.43,
   "hfov": 23.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24, this.camera_B69E454A_AE6F_9A96_41DC_97F8F7FF5439); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B03001_ADEF_3292_41E1_B04DB69BAC28",
   "yaw": 67.43,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.64,
   "hfov": 23.86,
   "distance": 100
  }
 ],
 "id": "overlay_BE17B6E4_ABAC_1F6E_41D6_26B24E268EB6",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -75.76,
   "hfov": 25.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE, this.camera_B691B52A_AE6F_9A97_41A7_76AA3A61035A); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B08001_ADEF_3292_41C1_236B0BFCDBE6",
   "yaw": -75.76,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.55,
   "hfov": 25.11,
   "distance": 100
  }
 ],
 "id": "overlay_BFCEB840_ABAC_72A6_41E1_B25A02A424B9",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -171.48,
   "hfov": 27.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD53BBF5_AED1_7572_41BC_4A1BE6BAAB3A",
   "yaw": -171.48,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.55,
   "hfov": 27.4,
   "distance": 100
  }
 ],
 "id": "overlay_96B234C1_AD53_3392_41C8_A4163F8D46D2",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 81.33,
   "hfov": 23.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6, this.camera_B8402934_AE6F_8AF3_41D4_1A4227B6DCEA); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E61030_ADEF_32F2_41C4_B4C5B64DB588",
   "yaw": 81.33,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -39.27,
   "hfov": 23.32,
   "distance": 100
  }
 ],
 "id": "overlay_9160CCB0_AD53_33F2_41DE_6F4E40966E78",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 165.61,
   "hfov": 24.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A, this.camera_B849B944_AE6F_8A93_41D8_805BEEBED895); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD53FBF5_AED1_7572_41E2_945B2A62E50C",
   "yaw": 165.61,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.36,
   "hfov": 24.87,
   "distance": 100
  }
 ],
 "id": "overlay_9171CE27_AD53_2E9E_41D2_B63C5F516AC7",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 158.06,
   "hfov": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193, this.camera_B85C8925_AE6F_8A92_41E1_43DEF7B70BE2); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD53CBF6_AED1_757E_41D1_E20A4E08E1E2",
   "yaw": 158.06,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.79,
   "hfov": 13.39,
   "distance": 100
  }
 ],
 "id": "overlay_EEC73EAA_AD31_EF96_41B9_918A2A503AB7",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 79.51,
   "hfov": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD532BF6_AED1_757E_41DE_8059AD8F038B",
   "yaw": 79.51,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 1.89,
   "hfov": 13.39,
   "distance": 100
  }
 ],
 "id": "overlay_EC50DBCF_AD31_15AE_41DE_C064005966ED",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 163.97,
   "hfov": 24.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588, this.camera_B86158C7_AE6F_8B9D_41B1_1939F737FD18); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CD0001_ADEF_3292_41CC_9D89AB558AA3",
   "yaw": 163.97,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.18,
   "hfov": 24.62,
   "distance": 100
  }
 ],
 "id": "overlay_B1CF8E52_ABB4_EEAA_41CB_1F7527951760",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -152.26,
   "hfov": 20.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -48.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24, this.camera_B86718D6_AE6F_8BBF_4198_306D839BAE2E); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CD6001_ADEF_3292_41CC_B2BF19C331DB",
   "yaw": -152.26,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -48.27,
   "hfov": 20.05,
   "distance": 100
  }
 ],
 "id": "overlay_B10C8F9D_ABB4_EDD9_41C6_32DB9AD00469",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -8.67,
   "hfov": 20.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -47.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6, this.camera_B9DFDB95_AE6F_8DBD_41B3_EF1471EB0CB6); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BD5FE2_ADEF_2D96_41CB_44D4DD564407",
   "yaw": -8.67,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -47.45,
   "hfov": 20.37,
   "distance": 100
  }
 ],
 "id": "overlay_A71093B6_A8D6_CA19_41E4_860E549A2C48",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -164.53,
   "hfov": 25.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7, this.camera_B9CC5BA5_AE6F_8D9D_41C6_5445119AE051); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BD9FE2_ADEF_2D96_41CB_DBFDDFF9472C",
   "yaw": -164.53,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.09,
   "hfov": 25.8,
   "distance": 100
  }
 ],
 "id": "overlay_B89E52E7_A8D7_4A06_41C7_4EBC4A0EEB6A",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -15.39,
   "hfov": 13.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BDEFE2_ADEF_2D96_41E1_0BC0868EA226",
   "yaw": -15.39,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.83,
   "hfov": 13.36,
   "distance": 100
  }
 ],
 "id": "overlay_A7B7B439_A8D7_4E0B_41D7_F1852FF2C1BA",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 50.04,
   "hfov": 24.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7, this.camera_B9F1CB57_AE6F_8EBD_41DD_ACF61F6F1710); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD406BC7_AED1_759E_41E4_717D5BB4DC3C",
   "yaw": 50.04,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.91,
   "hfov": 24.93,
   "distance": 100
  }
 ],
 "id": "overlay_CD94B9D3_AED1_15B6_41D3_6CD4F5B9AD0E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -142.03,
   "hfov": 23.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196, this.camera_B8A95A8C_AE6F_8F93_41DC_C2B299D322A6); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B7EFF2_ADEF_2D76_4164_8EBBA00AD443",
   "yaw": -142.03,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.09,
   "hfov": 23.05,
   "distance": 100
  }
 ],
 "id": "overlay_BEBB6E3C_A8CB_5A0A_41D5_28764BA8A0CF",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -109.3,
   "hfov": 26.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD477BCE_AED1_75AE_41D1_065BBC62A609",
   "yaw": -109.3,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.59,
   "hfov": 26.94,
   "distance": 100
  }
 ],
 "id": "overlay_BE24A6E7_A8CB_4A07_41DC_4372B9C80630",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 20.2,
   "hfov": 13.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB, this.camera_B8BD3A7C_AE6F_8F73_41E5_51A8F1B77C3D); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD475BCE_AED1_75AE_41E3_8692286517CE",
   "yaw": 20.2,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.61,
   "hfov": 13.38,
   "distance": 100
  }
 ],
 "id": "overlay_BF6D9E5B_A935_5A0F_41A8_AFF669C25D91",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -113.39,
   "hfov": 21.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659, this.camera_B414DF7D_AE6F_856D_41D4_75F2E325652E); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B2A001_ADEF_3292_41DE_2DE2AFD96BB6",
   "yaw": -113.39,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -43.36,
   "hfov": 21.9,
   "distance": 100
  }
 ],
 "id": "overlay_BFD7CD51_AB94_72A6_41E1_6A45724CBAB1",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -86.39,
   "hfov": 28.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE, this.camera_B404BF8D_AE6F_85AD_41E1_672B22E8C208); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B11001_ADEF_3292_41D3_7F23AFBC235B",
   "yaw": -86.39,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.86,
   "hfov": 28.15,
   "distance": 100
  }
 ],
 "id": "overlay_BF2A2FFC_AB94_2D5E_41D8_959194072B5B",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 71.52,
   "hfov": 23.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732, this.camera_B4F22F9D_AE6F_85B2_41E0_A2642E5DD4F7); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B16001_ADEF_3292_41DE_ECE86522B881",
   "yaw": 71.52,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.64,
   "hfov": 23.86,
   "distance": 100
  }
 ],
 "id": "overlay_BF34E239_AB94_36D9_41AB_EBA2A4281F3C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 50.24,
   "hfov": 19.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -49.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C, this.camera_B6357C41_AE6F_8A95_41C1_BFC3BB032833); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DFF011_ADEF_32B2_41D3_E485017A6691",
   "yaw": 50.24,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -49.5,
   "hfov": 19.56,
   "distance": 100
  }
 ],
 "id": "overlay_B03A9433_AD51_72F6_41E4_2DFEC2F65AD6",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -21.35,
   "hfov": 23.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1, this.camera_B6251C61_AE6F_8A92_41D6_B035FFBD235E); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DE5011_ADEF_32B2_41D2_028DFF6FE3AB",
   "yaw": -21.35,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.23,
   "hfov": 23.99,
   "distance": 100
  }
 ],
 "id": "overlay_B08354AD_AD51_1392_41D3_A78AE3601973",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -68.99,
   "hfov": 13.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6, this.camera_B703EE64_AE6F_8693_41D9_0767146B23BE); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD444BD1_AED1_75B2_41D3_9715F9FE759A",
   "yaw": -68.99,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.81,
   "hfov": 13.38,
   "distance": 100
  }
 ],
 "id": "overlay_B920E426_AB9C_12EB_41DA_65652A91B784",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -152.85,
   "hfov": 13.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB, this.camera_B725DE45_AE6F_869D_416E_A3F3054F5C44); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD458BD1_AED1_75B2_41D4_3FC2695ABA2A",
   "yaw": -152.85,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.86,
   "hfov": 13.34,
   "distance": 100
  }
 ],
 "id": "overlay_BAAAECC4_AB9C_13AF_41AC_AD2131B81F6F",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 72.33,
   "hfov": 24.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9, this.camera_B715AE55_AE6F_86B2_41DE_8E019BBB6DA7); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD45EBD1_AED1_75B2_41DB_6A6CFAFA5A71",
   "yaw": 72.33,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.82,
   "hfov": 24.12,
   "distance": 100
  }
 ],
 "id": "overlay_BAE931C4_AB9C_F5AE_41E0_480E82519834",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 163.15,
   "hfov": 21.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -44.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834, this.camera_B7F39E74_AE6F_8773_41DE_D2C76310767B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B21FF2_ADEF_2D76_41DE_28881145B79C",
   "yaw": 163.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -44.59,
   "hfov": 21.45,
   "distance": 100
  }
 ],
 "id": "overlay_B9973C75_AB9C_136E_41C4_01EC839C3E92",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_1_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 123.88,
   "hfov": 24.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC, this.camera_B747CE26_AE6F_869E_4183_4A0474607966); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B24001_ADEF_3292_41B9_E4855D0C1AF8",
   "yaw": 123.88,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.77,
   "hfov": 24.74,
   "distance": 100
  }
 ],
 "id": "overlay_B9A74E56_AB9C_2EAB_41D5_AFEA064CE081",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -47.94,
   "hfov": 25.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D, this.camera_B6E4547F_AE6F_9B6E_41D5_6CB3CC702528); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D53021_ADEF_3292_41CB_0AA81F1D8751",
   "yaw": -47.94,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.14,
   "hfov": 25.22,
   "distance": 100
  }
 ],
 "id": "overlay_84DE13C2_AD77_1596_41C9_25CA7390213E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -176.39,
   "hfov": 26.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25, this.camera_B607A440_AE6F_9A93_41E3_3B411EF78E4F); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D5A021_ADEF_3292_41E0_86D88F02BE0B",
   "yaw": -176.39,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.23,
   "hfov": 26.54,
   "distance": 100
  }
 ],
 "id": "overlay_84A1937F_AD77_156E_41D6_B394C48F7E22",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 117.74,
   "hfov": 24.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8, this.camera_B6D2549E_AE6F_9BAF_41E1_2061DB99E16B); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D42021_ADEF_3292_41CE_9078CEFD490A",
   "yaw": 117.74,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36,
   "hfov": 24.37,
   "distance": 100
  }
 ],
 "id": "overlay_875744E6_AD77_139E_41C8_153BF58C9878",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -143.26,
   "hfov": 25.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3, this.camera_B6C244BD_AE6F_9BED_41DB_86ACFD87C99A); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D4B021_ADEF_3292_41D0_0CDBBE684F75",
   "yaw": -143.26,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.5,
   "hfov": 25.68,
   "distance": 100
  }
 ],
 "id": "overlay_8744D64D_AD77_1E92_41AF_90B338B4EA64",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_1_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -83.12,
   "hfov": 26.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF, this.camera_B6B3F4DC_AE6F_9BB3_41D5_33CCEBF5A98A); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D30021_ADEF_3292_41B0_E0D1B11A95B4",
   "yaw": -83.12,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.45,
   "hfov": 26.23,
   "distance": 100
  }
 ],
 "id": "overlay_8769F7A5_AD77_1D92_41DA_F6388FAA6945",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -109.74,
   "hfov": 27.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD, this.camera_B6F4445F_AE6F_9AAD_41AA_9A699D296548); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD4CEBEB_AED1_7596_41C8_1D4B0E849298",
   "yaw": -109.74,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.5,
   "hfov": 27.78,
   "distance": 100
  }
 ],
 "id": "overlay_87C8120F_AD77_16AE_41D0_1A9CD1833AA7",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 106.29,
   "hfov": 22.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B, this.camera_B95B1AF9_AE6F_8F75_41DE_49668ED7CE9C); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD499BDC_AED1_75B2_41C4_F0480CA8699E",
   "yaw": 106.29,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.91,
   "hfov": 22.77,
   "distance": 100
  }
 ],
 "id": "overlay_A0AB79F8_AD37_1572_41D2_EF3697D7D480",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -165.76,
   "hfov": 24.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186, this.camera_B8973A9B_AE6F_8FB5_41D2_BD4B84EFC89E); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C59011_ADEF_32B2_41E0_A506F6EE292E",
   "yaw": -165.76,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.41,
   "hfov": 24.24,
   "distance": 100
  }
 ],
 "id": "overlay_A35C4F71_AD37_2D72_41D7_A8B6CFCB992C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 157.83,
   "hfov": 26.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B, this.camera_B96A5AEA_AE6F_8F96_419B_ADBA0AE72588); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C5C011_ADEF_32B2_41D1_01B8E65BE10C",
   "yaw": 157.83,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.41,
   "hfov": 26.74,
   "distance": 100
  }
 ],
 "id": "overlay_A34C506B_AD37_3296_41D4_77EC7D8E60F7",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 58.02,
   "hfov": 26.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD, this.camera_B9709ABB_AE6F_8FF5_41A0_DD6617AC15F4); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C42011_ADEF_32B2_41CD_D2739E28C3C8",
   "yaw": 58.02,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.27,
   "hfov": 26.02,
   "distance": 100
  }
 ],
 "id": "overlay_A3BCE155_AD37_32BD_41E1_744DC71D5794",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_1_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 105.47,
   "hfov": 27.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1, this.camera_B97F7ACA_AE6F_8F97_41D1_649723D11204); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C4A011_ADEF_32B2_41C5_066A78979BE4",
   "yaw": 105.47,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.5,
   "hfov": 27.83,
   "distance": 100
  }
 ],
 "id": "overlay_A3A3D230_AD37_36F2_41CB_DD085DE3C76A",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -8.44,
   "hfov": 13.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193, this.camera_B882BAAB_AE6F_8F95_41BE_2DC406C95655); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD490BDD_AED1_75B2_41D8_5E6759E12F94",
   "yaw": -8.44,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.06,
   "hfov": 13.34,
   "distance": 100
  }
 ],
 "id": "overlay_BFB589A2_AD2F_1596_41AF_60FE71B1311C",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 79.29,
   "hfov": 23.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC, this.camera_B98B3BF3_AE6F_8D75_41C0_3F30B566C577); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BA0FE2_ADEF_2D96_41E2_BF7DA1483F25",
   "yaw": 79.29,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.05,
   "hfov": 23.72,
   "distance": 100
  }
 ],
 "id": "overlay_B9A4D444_A8FF_4E79_41D6_E05C84342B40",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -171.48,
   "hfov": 18.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -52.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E, this.camera_B656DC22_AE6F_8A97_41E4_17FF56969763); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BA5FE2_ADEF_2D96_41D9_E2654A2B1B4C",
   "yaw": -171.48,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -52.36,
   "hfov": 18.4,
   "distance": 100
  }
 ],
 "id": "overlay_B954C6EE_A8FF_CA06_41C7_8D0D1927182E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -8.26,
   "hfov": 23.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732, this.camera_B6476C32_AE6F_8AF6_41B5_9FEE4317E43B); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BA9FE2_ADEF_2D96_41D6_E8EF1C656691",
   "yaw": -8.26,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.64,
   "hfov": 23.86,
   "distance": 100
  }
 ],
 "id": "overlay_B95828A4_A8FF_C639_41C6_89F01E1AE428",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 33.06,
   "hfov": 25.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BB8FE2_ADEF_2D96_41C3_C789697A193F",
   "yaw": 33.06,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.32,
   "hfov": 25.46,
   "distance": 100
  }
 ],
 "id": "overlay_BBECD1DE_A8FE_C606_4196_68E8D7476D0B",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -52.62,
   "hfov": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB, this.camera_B6663C12_AE6F_8AB7_41E3_0073C8A649D8); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD46FBCB_AED1_7596_41C3_2853AA6D7124",
   "yaw": -52.62,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.38,
   "hfov": 13.39,
   "distance": 100
  }
 ],
 "id": "overlay_C6EEE9DE_AED3_35AE_41D4_D16E2342AEB2",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 145.56,
   "hfov": 28.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25, this.camera_B7D1BE93_AE6F_87B5_41DE_17E1AE31384D); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DA0021_ADEF_3292_41E3_D5AF30C24125",
   "yaw": 145.56,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.45,
   "hfov": 28.22,
   "distance": 100
  }
 ],
 "id": "overlay_8D21BBE9_AD6F_1592_41AB_BE1CADBF7B06",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 100.15,
   "hfov": 26.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0, this.camera_B7E1CE83_AE6F_8795_41C4_E195C1C01F48); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DA6021_ADEF_3292_41DC_A3B4E6CF1AC0",
   "yaw": 100.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.82,
   "hfov": 26.64,
   "distance": 100
  }
 ],
 "id": "overlay_8DD49203_AD6F_7696_4199_BF76999CCE7B",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 145.56,
   "hfov": 25.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3, this.camera_B7AD2EE1_AE6F_8795_41C2_08317F0034F6); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DB7021_ADEF_3292_41B5_FA24C898776E",
   "yaw": 145.56,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.14,
   "hfov": 25.22,
   "distance": 100
  }
 ],
 "id": "overlay_8DE0F2CE_AD6F_77AE_41D1_71C6316D23AF",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -135.89,
   "hfov": 21.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD, this.camera_B7DF1EA3_AE6F_8796_41D8_B99FCF2923E7); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DBE021_ADEF_3292_41D6_1CDDF6E236D8",
   "yaw": -135.89,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -43.36,
   "hfov": 21.9,
   "distance": 100
  }
 ],
 "id": "overlay_8D888426_AD6F_729E_41A7_91565636A17B",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 57.61,
   "hfov": 23.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D, this.camera_B7CFFEC2_AE6F_8797_41E2_AF35898FA569); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD4CDBE6_AED1_759E_41E3_FFF903768E6B",
   "yaw": 57.61,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.23,
   "hfov": 23.99,
   "distance": 100
  }
 ],
 "id": "overlay_8D9284E1_AD6F_7395_41CF_04316BADB4C9",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_1_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 116.52,
   "hfov": 28.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8, this.camera_B7BFBED2_AE6F_87B6_41E0_CDE02ADD7F06); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DAC021_ADEF_3292_41B8_D31976DB80F3",
   "yaw": 116.52,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.18,
   "hfov": 28.78,
   "distance": 100
  }
 ],
 "id": "overlay_8DE1A868_AD6F_1292_41C8_A2310442F518",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 48.83,
   "hfov": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD4C2BE7_AED1_759E_41C2_CAE5A38F8B5F",
   "yaw": 48.83,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.56,
   "hfov": 13.39,
   "distance": 100
  }
 ],
 "id": "overlay_E8D843FD_AD33_3572_41C4_F87325C1EA2D",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -52.03,
   "hfov": 16.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -56.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966, this.camera_B92FF2E8_AE6F_9F93_41E1_4EF86E07DEA0); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B44FF2_ADEF_2D76_41B6_DD026A745DA4",
   "yaw": -52.03,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -56.86,
   "hfov": 16.47,
   "distance": 100
  }
 ],
 "id": "overlay_B989D68B_AB9C_1FBA_41DE_FBABD39E77A5",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 47.79,
   "hfov": 14.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -60.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68, this.camera_B920D2D9_AE6F_9FB5_41E1_CDE18077FF0E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B4BFF2_ADEF_2D76_41D4_6235AD2518D3",
   "yaw": 47.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -60.95,
   "hfov": 14.63,
   "distance": 100
  }
 ],
 "id": "overlay_B9BA7EA7_AB9C_2FEA_41E0_7A81D5FF7BA4",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 175.43,
   "hfov": 25.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3, this.camera_B8C3DA5D_AE6F_8EAD_41D7_FDC97EB5E282); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D9E021_ADEF_3292_41CA_BFCE5BA89F13",
   "yaw": 175.43,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.09,
   "hfov": 25.8,
   "distance": 100
  }
 ],
 "id": "overlay_8E82D297_AD71_17BE_41D9_D3E55476B905",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 136.15,
   "hfov": 25.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0, this.camera_B807A9FF_AE6F_8D6D_41E0_3503DAD1C4F3); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD4C6BE7_AED1_759E_41E4_93FD33E0EDD3",
   "yaw": 136.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.32,
   "hfov": 25.46,
   "distance": 100
  }
 ],
 "id": "overlay_896DDB9F_AD71_15AE_41C4_153CAA0828D1",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -139.57,
   "hfov": 27.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD, this.camera_B8FBCA1F_AE6F_8EAE_41DF_4242D2BB7513); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D8C021_ADEF_3292_41D9_228473843541",
   "yaw": -139.57,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.73,
   "hfov": 27.58,
   "distance": 100
  }
 ],
 "id": "overlay_89048C99_AD71_13B2_41D0_8E9CD2145360",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_1_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 134.18,
   "hfov": 27.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8, this.camera_B8D50A3E_AE6F_8EEF_41E2_3B5B718301C4); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D74021_ADEF_3292_41E4_A5DD7C7B7D40",
   "yaw": 134.18,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.36,
   "hfov": 27.79,
   "distance": 100
  }
 ],
 "id": "overlay_8E28C091_AD77_13B2_41CA_59D0CFC1BB21",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_1_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 163.64,
   "hfov": 27.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25, this.camera_B80C0A0F_AE6F_8EAD_41D4_CDC5D0C72F1D); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D7A021_ADEF_3292_41DE_E34CCC2E17BD",
   "yaw": 163.64,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.95,
   "hfov": 27.86,
   "distance": 100
  }
 ],
 "id": "overlay_892331C1_AD77_F595_41C2_BE2517978F61",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_1_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -138.76,
   "hfov": 21.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF, this.camera_B8CF1A6D_AE6F_8E92_41D4_066FC132C8BB); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D62021_ADEF_3292_41E4_82B37EC8734F",
   "yaw": -138.76,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -43.36,
   "hfov": 21.9,
   "distance": 100
  }
 ],
 "id": "overlay_8E145CB5_AD73_13F2_41D6_1E951667CEF2",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 44.74,
   "hfov": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB, this.camera_B8E71A2E_AE6F_8EEF_41CE_FE645C14BB97); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD4F0BE9_AED1_7592_41D7_D59536D81D06",
   "yaw": 44.74,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.26,
   "hfov": 13.39,
   "distance": 100
  }
 ],
 "id": "overlay_EA5CBA9D_AD31_77AD_41E4_38090C87C6E3",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 70.7,
   "hfov": 25.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588, this.camera_B9133B38_AE6F_8EF3_41D4_9DD3A11278E2); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CFE001_ADEF_3292_41D3_2CED92C32AF0",
   "yaw": 70.7,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.73,
   "hfov": 25.34,
   "distance": 100
  }
 ],
 "id": "overlay_B2C20E09_ABB4_2EA6_41C0_1B05CCB3B30C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 176.24,
   "hfov": 25.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659, this.camera_B903AB47_AE6F_8E9D_41B1_80CE4B003D31); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CE5001_ADEF_3292_41C8_8A5A4A8F936F",
   "yaw": 176.24,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.91,
   "hfov": 25.57,
   "distance": 100
  }
 ],
 "id": "overlay_B220C0C2_ABB4_13AB_41E2_2597F6F3D405",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 20.38,
   "hfov": 15.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -58.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2, this.camera_B9250B28_AE6F_8E93_41D9_FE79E0FC6CBE); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CEA001_ADEF_3292_41E4_29A81242CB87",
   "yaw": 20.38,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -58.5,
   "hfov": 15.74,
   "distance": 100
  }
 ],
 "id": "overlay_B25B228C_ABB4_17BF_41DC_68B286ADDB5B",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -34.85,
   "hfov": 24.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0, this.camera_B8DCE1EE_AE6F_9D6F_41DB_2DA194D6EB11); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D20021_ADEF_3292_41B0_321D2244B766",
   "yaw": -34.85,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.18,
   "hfov": 24.62,
   "distance": 100
  }
 ],
 "id": "overlay_80DEE6F5_AD71_1F72_41DD_B57B83F1DB3D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -83.12,
   "hfov": 25.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3, this.camera_B8B0020E_AE6F_9EAE_41C4_16BA2B98647C); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D28021_ADEF_3292_41E4_3143852B6F01",
   "yaw": -83.12,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.68,
   "hfov": 25.91,
   "distance": 100
  }
 ],
 "id": "overlay_80F0CB1C_AD71_16B2_41C2_68D4AA516AFD",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -123.62,
   "hfov": 24.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25, this.camera_B8C4E1FE_AE6F_9D6F_41D5_0666B332E576); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D11021_ADEF_3292_41E4_6080BC9A4BD4",
   "yaw": -123.62,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.77,
   "hfov": 24.74,
   "distance": 100
  }
 ],
 "id": "overlay_809DBBF6_AD71_157E_41E2_6BA51FC51266",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_1_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -35.04,
   "hfov": 27.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D, this.camera_B8D421DF_AE6F_9DAD_41C7_2E46098A4F84); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D18021_ADEF_3292_41D3_20114973F480",
   "yaw": -35.04,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.3,
   "hfov": 27.52,
   "distance": 100
  }
 ],
 "id": "overlay_80308F19_AD71_EEB2_41D1_970AD7EB5DBE",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_1_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -59.79,
   "hfov": 34.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF, this.camera_B8BC621D_AE6F_9EAD_41E0_3BD94BD12492); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D1E021_ADEF_3292_41C4_B17E8336690F",
   "yaw": -59.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.66,
   "hfov": 34.34,
   "distance": 100
  }
 ],
 "id": "overlay_80E80820_AD71_1292_41E4_F50291571A04",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -118.71,
   "hfov": 25.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9, this.camera_B947B2AA_AE6F_9F97_4193_A3E7DD12AE35); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CBE001_ADEF_3292_41C8_37A4E64A1300",
   "yaw": -118.71,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.55,
   "hfov": 25.11,
   "distance": 100
  }
 ],
 "id": "overlay_8A6F9AF3_ABAC_176A_41D6_1F6E373D3CF9",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 67.43,
   "hfov": 28.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CA9011_ADEF_32B2_41D5_CB014B19ECB1",
   "yaw": 67.43,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.86,
   "hfov": 28.15,
   "distance": 100
  }
 ],
 "id": "overlay_89A0F823_ABAC_72E9_41B0_44B2215EE006",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 177.06,
   "hfov": 24.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC, this.camera_B96A028B_AE6F_9F96_4189_C8EA74B12EDE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CAC011_ADEF_32B2_41D0_F89D46BB79B2",
   "yaw": 177.06,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.95,
   "hfov": 24.99,
   "distance": 100
  }
 ],
 "id": "overlay_89F8A33F_ABAC_16DA_41E4_3AE0614087C6",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 139.43,
   "hfov": 23.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C92011_ADEF_32B2_41E0_E27276ACB326",
   "yaw": 139.43,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.45,
   "hfov": 23.59,
   "distance": 100
  }
 ],
 "id": "overlay_891778FD_ABAC_135E_41DE_DEA41B6B5084",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_1_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 89.52,
   "hfov": 26.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B, this.camera_B93352B9_AE6F_9FF5_41DB_38BDD747EC6E); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C9B011_ADEF_32B2_41A6_A8DB5CA9A364",
   "yaw": 89.52,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.27,
   "hfov": 26.02,
   "distance": 100
  }
 ],
 "id": "overlay_893D0AB1_ABAC_17E9_41D5_5ABE6C12C7F7",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 35.93,
   "hfov": 25.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A, this.camera_B97EA27B_AE6F_9F75_4197_EEEF43FF22DC); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD488BD9_AED1_75B2_4198_3C24BF2AC4E5",
   "yaw": 35.93,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.55,
   "hfov": 25.11,
   "distance": 100
  }
 ],
 "id": "overlay_89203CAE_ABAC_13FA_41D6_8C88E8D6CEF4",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 29.2,
   "hfov": 13.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD48EBD9_AED1_75B2_41E3_B0E9ACC2B725",
   "yaw": 29.2,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -6.08,
   "hfov": 13.32,
   "distance": 100
  }
 ],
 "id": "overlay_8A0E77FD_AB94_1D5E_41D6_982918FB278C",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 4.83,
   "hfov": 26.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704, this.camera_B612CC80_AE6F_8B93_41D0_B04C6A5DB00D); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6FFD030_ADEF_32F2_41D8_D9C8E4DF6C64",
   "yaw": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.05,
   "hfov": 26.34,
   "distance": 100
  }
 ],
 "id": "overlay_E92C8D9F_AD36_EDAE_41C7_350C3A1386B3",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -62.67,
   "hfov": 23.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6FE4030_ADEF_32F2_41C6_693BCC6872D4",
   "yaw": -62.67,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.45,
   "hfov": 23.59,
   "distance": 100
  }
 ],
 "id": "overlay_E9E1281D_AD31_32B2_41E1_B1F7E46370A0",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 84.61,
   "hfov": 24.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B6EFF2_ADEF_2D76_41E4_DB16C0DF78C6",
   "yaw": 84.61,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.82,
   "hfov": 24.12,
   "distance": 100
  }
 ],
 "id": "overlay_A44AB054_AB94_12AF_41D3_A3CCAFB20AB9",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 84.61,
   "hfov": 24.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94, this.camera_B629A402_AE6F_9A96_41D4_496F1E1B0EA8); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B52FF2_ADEF_2D76_41BB_2E832F76A891",
   "yaw": 84.61,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.82,
   "hfov": 24.12,
   "distance": 100
  }
 ],
 "id": "overlay_BBD06147_AB94_F2AA_41E2_14D50D3DBBBE",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -88.03,
   "hfov": 22.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68, this.camera_B6163421_AE6F_9A95_41DD_BB9BB3866097); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B57FF2_ADEF_2D76_41C4_F7A6107D83AF",
   "yaw": -88.03,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.5,
   "hfov": 22.91,
   "distance": 100
  }
 ],
 "id": "overlay_BBEAA2E2_AB94_F76A_41E0_23620BA77D4D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 40.65,
   "hfov": 13.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB, this.camera_B63863F2_AE6F_9D77_41E3_B447FA33A659); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B5CFF2_ADEF_2D76_41A5_CE715EFC673C",
   "yaw": 40.65,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.42,
   "hfov": 13.37,
   "distance": 100
  }
 ],
 "id": "overlay_A5C49254_AB94_76AE_41E3_B23FF732D0AD",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -45.89,
   "hfov": 17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -55.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2, this.camera_B83490C6_AE6F_9B9E_41DD_8637CC65B037); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CDC001_ADEF_3292_41DA_432C15C7A335",
   "yaw": -45.89,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -55.64,
   "hfov": 17,
   "distance": 100
  }
 ],
 "id": "overlay_B0B9E66A_ABB4_3F7A_41D0_83BDA08D300F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -112.17,
   "hfov": 12.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -65.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24, this.camera_B83AB0D5_AE6F_9BBD_41D5_5F9E698D8962); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CC5001_ADEF_3292_41DA_9BBCA36BEB97",
   "yaw": -112.17,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -65.05,
   "hfov": 12.71,
   "distance": 100
  }
 ],
 "id": "overlay_B0E03887_ABB4_13A9_41E1_D866BB02B44E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -151.03,
   "hfov": 25.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CC9001_ADEF_3292_41C4_2F1DC8DB2BB5",
   "yaw": -151.03,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.32,
   "hfov": 25.46,
   "distance": 100
  }
 ],
 "id": "overlay_B05D0F44_ABB4_EEAF_41B0_287382B1150D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 95.24,
   "hfov": 26.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196, this.camera_B4488F4F_AE6F_86AE_41A9_AF67134C4EBC); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B41FF2_ADEF_2D76_41E2_B4EA6D2688F9",
   "yaw": 95.24,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.64,
   "hfov": 26.44,
   "distance": 100
  }
 ],
 "id": "overlay_BB567B78_AB94_1566_41C1_9B2101813CCA",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -131.8,
   "hfov": 24.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963, this.camera_B426BF6E_AE6F_856F_41AB_3F7306CF0B9C); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B46FF2_ADEF_2D76_41E3_6E8A6953AE17",
   "yaw": -131.8,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.36,
   "hfov": 24.87,
   "distance": 100
  }
 ],
 "id": "overlay_BAA8E6A2_AB94_1FEB_41B5_E2015C37C039",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -78.21,
   "hfov": 18.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -52.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966, this.camera_B4361F5E_AE6F_86AF_41D4_8EDF72F915A7); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B4DFF2_ADEF_2D76_4164_97F90AD32575",
   "yaw": -78.21,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -52.36,
   "hfov": 18.4,
   "distance": 100
  }
 ],
 "id": "overlay_BAC33859_AB94_1359_41D2_EEBFC0CC1D40",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -82.71,
   "hfov": 23.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4, this.camera_B6F01CBE_AE6F_8BEF_41E5_9ED87FDBF29E); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6EA9030_ADEF_32F2_41C1_57C23FCB77DB",
   "yaw": -82.71,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.64,
   "hfov": 23.86,
   "distance": 100
  }
 ],
 "id": "overlay_95E67DBC_AD51_6DF2_41E5_413D618995FB",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 11.79,
   "hfov": 25.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498, this.camera_B6D0DCFD_AE6F_8B6D_41B1_C8041EAEABF6); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E91030_ADEF_32F2_41DF_092854EB34A7",
   "yaw": 11.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.32,
   "hfov": 25.46,
   "distance": 100
  }
 ],
 "id": "overlay_95A620B7_AD51_13FE_41D0_3A0BB02F375B",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 69.47,
   "hfov": 24.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6, this.camera_B602FC9F_AE6F_8BAD_41E5_C8122A0E99E3); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E99030_ADEF_32F2_41C9_B65D3C0A5D7D",
   "yaw": 69.47,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.36,
   "hfov": 24.87,
   "distance": 100
  }
 ],
 "id": "overlay_9588027C_AD51_1772_417E_6D7646AFBA17",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -148.76,
   "hfov": 13.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193, this.camera_B6E0ECDE_AE6F_8BAE_41E3_20DDBB077885); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD521BF3_AED1_7576_41D6_8DA5EBB6E758",
   "yaw": -148.76,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.88,
   "hfov": 13.32,
   "distance": 100
  }
 ],
 "id": "overlay_96E21463_AD51_3296_41D2_2EDCEE35CC84",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 84.01,
   "hfov": 15.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E88030_ADEF_32F2_41C7_8D0F2B08E5F4",
   "yaw": 84.01,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.26,
   "hfov": 15.85,
   "distance": 100
  }
 ],
 "id": "overlay_ED10544F_AD37_32AE_41DF_D2851C40E83D",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 82.79,
   "hfov": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD525BF4_AED1_7572_41DC_D639CAFB56D7",
   "yaw": 82.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.26,
   "hfov": 13.39,
   "distance": 100
  }
 ],
 "id": "overlay_E8D85A0C_AD31_7692_41CE_C13DCDCF0B26",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 44.11,
   "hfov": 20.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -48.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68, this.camera_B82B39B1_AE6F_8DF5_41BC_034CAB651ED6); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B33FF2_ADEF_2D76_41D0_A57ED55CF5B0",
   "yaw": 44.11,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -48.27,
   "hfov": 20.05,
   "distance": 100
  }
 ],
 "id": "overlay_BA05329C_AB9C_17DE_41A8_B0F64C8892E9",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 98.93,
   "hfov": 25.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963, this.camera_B810F9C1_AE6F_8D95_41DE_AE244C85EED9); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B5FFF2_ADEF_2D76_41D8_9671A8DEA5E6",
   "yaw": 98.93,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.14,
   "hfov": 25.22,
   "distance": 100
  }
 ],
 "id": "overlay_BA7DF563_AB9C_1D6A_41E1_FB5EA706F452",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 145.56,
   "hfov": 24.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3, this.camera_B9EF2B86_AE6F_8D9F_41C8_CFAB1C1CE3A4); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E0A030_ADEF_32F2_41E2_E025C29EDB8A",
   "yaw": 145.56,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.95,
   "hfov": 24.99,
   "distance": 100
  }
 ],
 "id": "overlay_EF01ACC4_AD31_3392_41D2_C8ED89FF0272",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -136.08,
   "hfov": 13.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6, this.camera_B9E19B76_AE6F_8D7F_41E4_3015FF75BD46); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD504BFB_AED1_7576_41DE_0AF644C35C44",
   "yaw": -136.08,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 7.21,
   "hfov": 13.29,
   "distance": 100
  }
 ],
 "id": "overlay_EEC9C52B_AD31_1296_41E2_AA09CD25343E",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 57.2,
   "hfov": 25.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8, this.camera_B83B8982_AE6F_8D97_41E1_50FFFF658884); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D07021_ADEF_3292_41DE_A9B4E3D19230",
   "yaw": 57.2,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.5,
   "hfov": 25.68,
   "distance": 100
  }
 ],
 "id": "overlay_9D4321BB_AD53_75F6_41DE_D7821A85CFB9",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -36.48,
   "hfov": 28.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF, this.camera_B82469A2_AE6F_8D96_41E0_C6A14BB9DCB0); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D0F021_ADEF_3292_41D6_D3D09274A6A9",
   "yaw": -36.48,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.86,
   "hfov": 28.15,
   "distance": 100
  }
 ],
 "id": "overlay_9D3718A0_AD53_7393_41D4_B638C18626A1",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -8.26,
   "hfov": 28.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D, this.camera_B84FF963_AE6F_8A95_41D4_71F287A2EE0F); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6EF7021_ADEF_3292_41D3_29D6F789C2F9",
   "yaw": -8.26,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.23,
   "hfov": 28.44,
   "distance": 100
  }
 ],
 "id": "overlay_9D0D99E9_AD53_7592_41E4_DBE935FB6A8F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -35.26,
   "hfov": 24.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3, this.camera_B83EA992_AE6F_8DB7_41B6_0CB6CEF82668); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6EFF021_ADEF_3292_41DB_95D33FF246EC",
   "yaw": -35.26,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.77,
   "hfov": 24.74,
   "distance": 100
  }
 ],
 "id": "overlay_9DE3DB40_AD53_7692_41E5_31A47EE41ED3",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_1_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 15.06,
   "hfov": 26.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0, this.camera_B8323973_AE6F_8D76_41DE_4350E5C74BC5); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6EE7021_ADEF_3292_41CE_D5DF0510D2CF",
   "yaw": 15.06,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.64,
   "hfov": 26.44,
   "distance": 100
  }
 ],
 "id": "overlay_9DF82CD7_AD53_73BE_41D3_82F6AA4FCCA5",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -74.37,
   "hfov": 21.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343, this.camera_B81F59F0_AE6F_8D72_41E1_46AED3C58A7B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6FCD040_ADEF_3292_41CC_B299282384BC",
   "yaw": -74.37,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.77,
   "hfov": 21.32,
   "distance": 100
  }
 ],
 "id": "overlay_E4FAAAFF_ADD3_F76E_41E4_3945761ADED5",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -5.39,
   "hfov": 24.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1, this.camera_B8EE71CF_AE6F_9DAD_41DC_DB061DC594B7); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C0F011_ADEF_32B2_41C6_AAD77DA80F0A",
   "yaw": -5.39,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.82,
   "hfov": 24.12,
   "distance": 100
  }
 ],
 "id": "overlay_B1CAB558_AD53_12B2_41D0_9627997DAC4E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -85.17,
   "hfov": 17.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E, this.camera_B8E9E1BF_AE6F_9DED_41DD_C323DB248F83); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DF4011_ADEF_32B2_4182_609F0BB33FB5",
   "yaw": -85.17,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -54,
   "hfov": 17.71,
   "distance": 100
  }
 ],
 "id": "overlay_B1A8EE40_AD53_6E92_41D0_7A0068998BAA",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 61.29,
   "hfov": 23.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A, this.camera_B4589F3F_AE6F_86ED_41CA_3A8C863A702B); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E4A030_ADEF_32F2_41DD_5445606214F0",
   "yaw": 61.29,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.86,
   "hfov": 23.46,
   "distance": 100
  }
 ],
 "id": "overlay_EDB1BD7C_AD33_ED72_41E2_0ECC06491774",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -171.07,
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -53.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF, this.camera_B47B7F10_AE6F_86B3_41E1_D839EEE4EA8A); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E33030_ADEF_32F2_41D8_730036779A45",
   "yaw": -171.07,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -53.18,
   "hfov": 18.05,
   "distance": 100
  }
 ],
 "id": "overlay_EFE32C75_AD3F_1372_417C_3F00A513A584",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -119.53,
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -53.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5, this.camera_B468FF20_AE6F_8692_41D3_1C27D1545F86); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E3D030_ADEF_32F2_41E3_9F351F1E78B4",
   "yaw": -119.53,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -53.18,
   "hfov": 18.05,
   "distance": 100
  }
 ],
 "id": "overlay_EFBEAAEC_AD3F_F792_4192_9F06A2B09822",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -31.35,
   "hfov": 13.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C8F011_ADEF_32B2_41D1_7A55474564EF",
   "yaw": -31.35,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.42,
   "hfov": 13.37,
   "distance": 100
  }
 ],
 "id": "overlay_8F5547BC_AB9C_1DDF_41D4_17109468811F",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 4.02,
   "hfov": 27.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C76011_ADEF_32B2_41DE_BD5782C4084C",
   "yaw": 4.02,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.55,
   "hfov": 27.4,
   "distance": 100
  }
 ],
 "id": "overlay_8C83A8EC_AB9C_F37F_41D3_843C4E5F3B01",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.21,
   "hfov": 16.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -57.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC, this.camera_B69A4DA9_AE6F_8592_419C_3D35383DED6D); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C7F011_ADEF_32B2_41E1_1546100BDEB9",
   "yaw": -177.21,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -57.68,
   "hfov": 16.1,
   "distance": 100
  }
 ],
 "id": "overlay_8C3E1598_AB9C_3DA7_41D9_A95D7C973BD3",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -77.8,
   "hfov": 24.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A, this.camera_B77B8DE7_AE6F_859D_41CE_9A645127DD31); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD487BDB_AED1_75B6_41D1_00E5E379C47F",
   "yaw": -77.8,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.18,
   "hfov": 24.62,
   "distance": 100
  }
 ],
 "id": "overlay_8FF5FD8D_AB9C_2DBE_41D9_F9170FF76D04",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -41.8,
   "hfov": 26.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A, this.camera_B769BDF7_AE6F_857D_41E4_98435981BE7F); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD485BDB_AED1_75B6_41C0_62CF031B7846",
   "yaw": -41.8,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.86,
   "hfov": 26.12,
   "distance": 100
  }
 ],
 "id": "overlay_8F755B57_AB9C_16AA_4195_92FDF38A8787",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 15.06,
   "hfov": 23.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B, this.camera_B759BE16_AE6F_86BF_41CE_083E846E450B); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD49BBDB_AED1_75B6_41E4_1C018049F0AD",
   "yaw": 15.06,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -39.27,
   "hfov": 23.32,
   "distance": 100
  }
 ],
 "id": "overlay_C3BF1F61_AEF3_2E92_41B3_9CA7E8C8D1EE",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 103.43,
   "hfov": 19.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -50.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9843975_A8CD_461B_41B2_35B5B7794B81, this.camera_B79DFEF1_AE6F_8775_41BF_ED1AAF4D8FC1); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6FDA030_ADEF_32F2_41E0_F43F52E56F05",
   "yaw": 103.43,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -50.32,
   "hfov": 19.23,
   "distance": 100
  }
 ],
 "id": "overlay_EA425431_ADD2_F2F2_41E3_1C7EFA1AC8C3",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -73.71,
   "hfov": 23.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67, this.camera_B78B7F00_AE6F_8693_41E3_B75F7CBF9CEC); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6FC3030_ADEF_32F2_41D4_F16823D39FC7",
   "yaw": -73.71,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.05,
   "hfov": 23.72,
   "distance": 100
  }
 ],
 "id": "overlay_EA79D3D0_ADD1_35B2_41C8_BF37CF632099",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -160.03,
   "hfov": 18.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -51.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A, this.camera_B9BDBBC4_AE6F_8D93_41E0_CC6FF9666F29); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6EC8030_ADEF_32F2_41C1_83FE5E20F6A1",
   "yaw": -160.03,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -51.14,
   "hfov": 18.9,
   "distance": 100
  }
 ],
 "id": "overlay_9B2FC703_AD5F_3E96_41E4_C46A2C0D5FD8",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 46.97,
   "hfov": 27.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6ECF030_ADEF_32F2_41DC_4F4C114D58DF",
   "yaw": 46.97,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.95,
   "hfov": 27.31,
   "distance": 100
  }
 ],
 "id": "overlay_9BCDCE63_AD5F_EE96_41CC_2215D43B6C44",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 8.52,
   "hfov": 27.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498, this.camera_B99BDBE4_AE6F_8D92_41DE_3ADC2D923E58); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6EB9030_ADEF_32F2_41DA_70F93D95C871",
   "yaw": 8.52,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.18,
   "hfov": 27.03,
   "distance": 100
  }
 ],
 "id": "overlay_9BA7F028_AD5F_1292_41E3_961FAF22B9A7",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 7.7,
   "hfov": 21.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A, this.camera_B9ADABD4_AE6F_8DB3_41DD_9E1FF76298CB); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6EA1030_ADEF_32F2_41A0_FAF648EE2084",
   "yaw": 7.7,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -45.41,
   "hfov": 21.15,
   "distance": 100
  }
 ],
 "id": "overlay_9BB171ED_AD5F_1592_41BB_73AE50F4D8B7",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 48.61,
   "hfov": 24.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD, this.camera_B77C0588_AE6F_8593_41E1_6B8676450015); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD496BDD_AED1_75B2_41AC_8A50020BB0EA",
   "yaw": 48.61,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.41,
   "hfov": 24.24,
   "distance": 100
  }
 ],
 "id": "overlay_BEC6E160_AD52_F292_41CA_E1FB6C2094C2",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 128.79,
   "hfov": 20.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -47.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1, this.camera_B76CD5A7_AE6F_859D_41D3_6EF28D5108D1); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C49011_ADEF_32B2_41E2_6AC839EA1206",
   "yaw": 128.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -47.05,
   "hfov": 20.53,
   "distance": 100
  }
 ],
 "id": "overlay_B95BE1E8_AD53_3592_41D7_CE47A1BDAC05",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -146.12,
   "hfov": 22.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B, this.camera_B75A05B7_AE6F_85FD_41BC_6104A341F313); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C4F011_ADEF_32B2_41E2_3BFF11F0E5F2",
   "yaw": -146.12,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -41.32,
   "hfov": 22.62,
   "distance": 100
  }
 ],
 "id": "overlay_B974C36F_AD53_356E_41D9_983698D86DBB",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -75.76,
   "hfov": 24.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186, this.camera_B68EF569_AE6F_9A95_41D7_C5A3C9C7714E); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C37011_ADEF_32B2_41D8_66A609C701CE",
   "yaw": -75.76,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.36,
   "hfov": 24.87,
   "distance": 100
  }
 ],
 "id": "overlay_B90F74A7_AD53_339E_41B2_6506552E6BA9",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_1_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -37.3,
   "hfov": 24.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A, this.camera_B74AE5C7_AE6F_859E_41E2_B4A23BE5A0C2); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C3D011_ADEF_32B2_41E5_74F59AE67A73",
   "yaw": -37.3,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.82,
   "hfov": 24.12,
   "distance": 100
  }
 ],
 "id": "overlay_BFCBA62E_AD53_3EEE_4156_850F74784820",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -6.39,
   "hfov": 13.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD4EDBDF_AED1_75AE_41C3_DE56FB67CEDD",
   "yaw": -6.39,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.2,
   "hfov": 13.38,
   "distance": 100
  }
 ],
 "id": "overlay_BFA59AEA_AD53_7796_41D7_5ED575851CC7",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 127.97,
   "hfov": 19.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -49.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF, this.camera_B8502905_AE6F_8A9D_41C5_BEFB56F5F55B); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E22030_ADEF_32F2_41E0_658D478A5FB7",
   "yaw": 127.97,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -49.91,
   "hfov": 19.4,
   "distance": 100
  }
 ],
 "id": "overlay_ECA95C6A_AD31_1296_41D5_82504E403BA0",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 72.41,
   "hfov": 20.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4, this.camera_B86AE8F6_AE6F_8B7E_41DF_209B21181868); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E2A030_ADEF_32F2_41B8_B3930CD5716F",
   "yaw": 72.41,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -45.44,
   "hfov": 20.67,
   "distance": 100
  }
 ],
 "id": "overlay_EE9C12F3_AD32_F776_41DA_98AD7C857137",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -11.86,
   "hfov": 16.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -55.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4, this.camera_B821D0E5_AE6F_9B9D_41B9_6AFD690D641A); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E12030_ADEF_32F2_41D9_F6EC6200BD93",
   "yaw": -11.86,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -55.67,
   "hfov": 16.61,
   "distance": 100
  }
 ],
 "id": "overlay_ECB97E15_AD33_6EB2_41C9_4FC56387D234",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -83.12,
   "hfov": 17.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -54.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5, this.camera_B8275104_AE6F_9A93_4189_C475B3E3F072); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E1A030_ADEF_32F2_41B8_935FBDCDE504",
   "yaw": -83.12,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -54.82,
   "hfov": 17.36,
   "distance": 100
  }
 ],
 "id": "overlay_EE35A1B6_AD33_15FE_41DF_488F6920259E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 10.56,
   "hfov": 24.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E02030_ADEF_32F2_41DD_2C5E86D22EC2",
   "yaw": 10.56,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.95,
   "hfov": 24.99,
   "distance": 100
  }
 ],
 "id": "overlay_EF3B2113_AD33_12B6_41E0_E78336C4794A",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 161.59,
   "hfov": 28.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E6B030_ADEF_32F2_41E1_BBEBB92F7051",
   "yaw": 161.59,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.03,
   "hfov": 28.01,
   "distance": 100
  }
 ],
 "id": "overlay_90DEE79F_AD31_1DAE_41CE_209A19E6C746",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -164.25,
   "hfov": 28.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498, this.camera_B64BD3E2_AE6F_9D97_41A5_E090D4886940); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6E50030_ADEF_32F2_41D2_8E067F8B78AB",
   "yaw": -164.25,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.48,
   "hfov": 28.84,
   "distance": 100
  }
 ],
 "id": "overlay_90ADF182_AD31_F596_41E0_A2B2F16C7DEC",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -2.3,
   "hfov": 13.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704, this.camera_B66D83C3_AE6F_9D95_41D8_5AFAB5CACD6B); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD535BF7_AED1_757E_41D9_AED4F29621E2",
   "yaw": -2.3,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -7.11,
   "hfov": 13.29,
   "distance": 100
  }
 ],
 "id": "overlay_EFF5A8FE_AD37_336E_41CC_74D8189482FA",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 177.88,
   "hfov": 26.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A, this.camera_B65B33D3_AE6F_9DB6_41D5_C722783BC80A); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD50ABF8_AED1_7572_41E3_359CBFD4643C",
   "yaw": 177.88,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.27,
   "hfov": 26.02,
   "distance": 100
  }
 ],
 "id": "overlay_EF183595_AD33_7DB2_41E3_1931E63A7F21",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -35.67,
   "hfov": 26.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD, this.camera_B8023152_AE6F_9AB7_41DE_66A118DD0DDA); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6EF5021_ADEF_3292_41DC_C9B5AFD26D06",
   "yaw": -35.67,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.86,
   "hfov": 26.12,
   "distance": 100
  }
 ],
 "id": "overlay_9EE5EBC2_AD53_1596_41C8_C40FED38ECA6",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.33,
   "hfov": 26.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF, this.camera_B8F5F181_AE6F_9D95_41DE_68F82A60D388); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6EFD021_ADEF_3292_41D8_A59871DAAE6A",
   "yaw": 0.33,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.45,
   "hfov": 26.23,
   "distance": 100
  }
 ],
 "id": "overlay_9EBC50C1_AD53_1392_41D7_E420A6F65B5D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 176.24,
   "hfov": 23.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25, this.camera_B81CA142_AE6F_9A97_41E3_F8EC5BA7F34C); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6EE3021_ADEF_3292_41DA_F5C1DD170A98",
   "yaw": 176.24,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.09,
   "hfov": 23.05,
   "distance": 100
  }
 ],
 "id": "overlay_9E8A4286_AD53_179E_41E1_C07B67DB2FA7",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 122.65,
   "hfov": 26.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8, this.camera_B80E1171_AE6F_9D75_41E0_9493FC31D15F); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6EEB021_ADEF_3292_41D9_9DD34BA45961",
   "yaw": 122.65,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27,
   "hfov": 26.84,
   "distance": 100
  }
 ],
 "id": "overlay_9960F43B_AD53_12F6_41DD_39E7E8258BCC",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_1_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 83.79,
   "hfov": 25.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0, this.camera_B819F133_AE6F_9AF5_41C1_BA1ADE5429A7); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6ED3030_ADEF_32F2_41D3_6F9B25CDBD3B",
   "yaw": 83.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.68,
   "hfov": 25.91,
   "distance": 100
  }
 ],
 "id": "overlay_9979E5C2_AD53_1D96_41D1_A6725DC53375",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_1_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 38.38,
   "hfov": 27.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D, this.camera_B8094162_AE6F_9A97_41E5_95F55D5BBE9E); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6ED8030_ADEF_32F2_41E0_C4241578201C",
   "yaw": 38.38,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.55,
   "hfov": 27.4,
   "distance": 100
  }
 ],
 "id": "overlay_995397B6_AD53_1DFE_41D1_494E390E4CA4",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 44.33,
   "hfov": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD4D5BF1_AED1_7572_41B2_7B880FD531DB",
   "yaw": 44.33,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.67,
   "hfov": 13.39,
   "distance": 100
  }
 ],
 "id": "overlay_E835ABC2_AD31_1596_41E4_C36BF15BCB62",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -116.26,
   "hfov": 22.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834, this.camera_B67D13B3_AE6F_9DF5_41AE_FC2B745A1E35); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BBFFE2_ADEF_2D96_419C_026A0C0AD448",
   "yaw": -116.26,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -41.32,
   "hfov": 22.62,
   "distance": 100
  }
 ],
 "id": "overlay_BB3B3EA7_A8DD_5A07_41DF_F8F7DC1A85F4",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -67.98,
   "hfov": 24.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732, this.camera_B991C385_AE6F_9D92_41DB_EFE93FAB1C1E); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BA5FF2_ADEF_2D76_41D1_0E2A3ADF8761",
   "yaw": -67.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.95,
   "hfov": 24.99,
   "distance": 100
  }
 ],
 "id": "overlay_BB1E1212_A8DD_4A19_41D6_7C097439736C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -22.17,
   "hfov": 23.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9, this.camera_B99F0394_AE6F_9DB3_41C5_59EE8F4B1823); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BAAFF2_ADEF_2D76_41CC_3302F667222F",
   "yaw": -22.17,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.86,
   "hfov": 23.46,
   "distance": 100
  }
 ],
 "id": "overlay_BCFBA8D8_A8DD_460A_41E2_F7E67B135419",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 69.88,
   "hfov": 25.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B, this.camera_B98FA3A4_AE6F_9D93_41E3_4144AEFEC6C8); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B90FF2_ADEF_2D76_41D2_D566B0DCD04A",
   "yaw": 69.88,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.5,
   "hfov": 25.68,
   "distance": 100
  }
 ],
 "id": "overlay_BCD95B2A_A8DD_7A09_41D7_0FC47280481D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 26.11,
   "hfov": 26.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186, this.camera_B9B0B356_AE6F_9EBF_41C9_15798FAF1265); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B94FF2_ADEF_2D76_41B8_79C26D3DC5F5",
   "yaw": 26.11,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.05,
   "hfov": 26.34,
   "distance": 100
  }
 ],
 "id": "overlay_BCBBECFF_A8DD_7E07_41DB_B53421C971D8",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -79.62,
   "hfov": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B98FF2_ADEF_2D76_41E1_F974D7AED82D",
   "yaw": -79.62,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.15,
   "hfov": 13.39,
   "distance": 100
  }
 ],
 "id": "overlay_BA14A0CD_A8DA_C60B_41D7_69BC7BD61D3F",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -159.8,
   "hfov": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E, this.camera_B9A13375_AE6F_9D7D_41C7_1E6570543EA7); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B9EFF2_ADEF_2D76_41D2_9C6D1E021453",
   "yaw": -159.8,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.38,
   "hfov": 13.39,
   "distance": 100
  }
 ],
 "id": "overlay_BB549C22_A8DB_5E39_41B7_28D33D670214",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -102.94,
   "hfov": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B83FF2_ADEF_2D76_41E0_383F3B6FF830",
   "yaw": -102.94,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.38,
   "hfov": 13.39,
   "distance": 100
  }
 ],
 "id": "overlay_B9092ED1_A8DB_5A1A_41BD_6467ECDE0F87",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 121.43,
   "hfov": 27.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196, this.camera_B882F25C_AE6F_9EB3_41D1_9A0FEF045D30); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B88FF2_ADEF_2D76_41D4_86B86B004B19",
   "yaw": 121.43,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.09,
   "hfov": 27.91,
   "distance": 100
  }
 ],
 "id": "overlay_BC78E570_A8CF_CE19_41DD_DEECBD96ADCF",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 141.47,
   "hfov": 22.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94, this.camera_B896B24C_AE6F_9E93_41C4_5922C1F795A5); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B8DFF2_ADEF_2D76_41E2_058038166519",
   "yaw": 141.47,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -42.55,
   "hfov": 22.19,
   "distance": 100
  }
 ],
 "id": "overlay_BDF9800F_A8CF_C607_41C8_190A13388B0F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 9.33,
   "hfov": 20.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -46.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834, this.camera_B970C26B_AE6F_9E95_41E4_51BA6ACFFF81); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B72FF2_ADEF_2D76_41BC_A8EEBF0BA5CB",
   "yaw": 9.33,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -46.23,
   "hfov": 20.84,
   "distance": 100
  }
 ],
 "id": "overlay_BDE7E2E0_A8CF_CA39_41C3_5070A76E22DE",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -74.94,
   "hfov": 21.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -44.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732, this.camera_B8A8F23C_AE6F_9EF3_41C9_4292C2A21159); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B78FF2_ADEF_2D76_41CA_F6760A8AA948",
   "yaw": -74.94,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -44.59,
   "hfov": 21.45,
   "distance": 100
  }
 ],
 "id": "overlay_BDD525B2_A8CF_CE1E_41DD_97371D928EAE",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -171.07,
   "hfov": 19.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -49.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D, this.camera_B9460B09_AE6F_8E95_41BC_015DD6C6A305); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD418BC9_AED1_7592_41CA_B9CCAF25B0E3",
   "yaw": -171.07,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -49.91,
   "hfov": 19.4,
   "distance": 100
  }
 ],
 "id": "overlay_B9DE9FA7_A8CF_7A06_41BB_0ECDEF0256D7",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.15,
   "hfov": 13.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E, this.camera_B9346B18_AE6F_8EB3_41C1_08AEA12A6E99); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD41EBC9_AED1_7592_41E0_711C4866752A",
   "yaw": 0.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -7.51,
   "hfov": 13.28,
   "distance": 100
  }
 ],
 "id": "overlay_B9E2DE4E_A8CF_7A09_41BA_6562E9785310",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 64.56,
   "hfov": 23.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659, this.camera_B8E301B0_AE6F_9DF3_41E0_D81A475167DD); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6B0C001_ADEF_3292_41B4_D33580F697AE",
   "yaw": 64.56,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.23,
   "hfov": 23.99,
   "distance": 100
  }
 ],
 "id": "overlay_BCAC4A8E_ABAC_17BA_41DC_ADB8F50AA910",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 21.61,
   "hfov": 21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CF2001_ADEF_3292_41DC_6484549ABEE0",
   "yaw": 21.61,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.7,
   "hfov": 21,
   "distance": 100
  }
 ],
 "id": "overlay_BCF010FB_ABAC_135A_41CD_BACA6DC28397",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 48.01,
   "hfov": 13.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6, this.camera_B8FAB1A0_AE6F_9D93_41E4_93BD3618FF4B); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6CF9001_ADEF_3292_41D5_9B6C304C5DEF",
   "yaw": 48.01,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -6.29,
   "hfov": 13.31,
   "distance": 100
  }
 ],
 "id": "overlay_BE6B48EE_ABAC_737A_4191_52917BB5DA24",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "horizontalAlign": "center",
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "height": 58,
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "horizontalAlign": "center",
 "width": 100,
 "class": "IconButton",
 "right": 30,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "height": 75,
 "bottom": 8,
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "paddingBottom": 0,
 "mode": "push",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "horizontalAlign": "center",
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "propagateClick": true,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "horizontalAlign": "center",
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "propagateClick": true,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -30.35,
   "hfov": 20.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -46.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B, this.camera_B83180B6_AE6F_9BFF_41E2_3CBC2131D3D1); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C2A011_ADEF_32B2_41C2_721C085FCC6A",
   "yaw": -30.35,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -46.23,
   "hfov": 20.84,
   "distance": 100
  }
 ],
 "id": "overlay_B4A93678_AD5F_1F72_41C7_C7E95F497442",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 164.38,
   "hfov": 23.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E, this.camera_B84870A6_AE6F_9B9F_41D4_0C9A2152C0ED); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C13011_ADEF_32B2_41D8_DE74A842889A",
   "yaw": 164.38,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.45,
   "hfov": 23.59,
   "distance": 100
  }
 ],
 "id": "overlay_B767FD7C_AD5F_2D72_41C4_FACA080A7449",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 128.38,
   "hfov": 22.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C, this.camera_B8421097_AE6F_9BBE_41D7_0A438F22C546); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C18011_ADEF_32B2_41B4_F72AF24A091B",
   "yaw": 128.38,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.91,
   "hfov": 22.77,
   "distance": 100
  }
 ],
 "id": "overlay_B771FE48_AD5F_2E92_41E5_89752EA083A5",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -31.57,
   "hfov": 26.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A, this.camera_B85E9087_AE6F_9B9D_41DB_2353B2A5C129); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C1F011_ADEF_32B2_41E1_87D213F68CAE",
   "yaw": -31.57,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27,
   "hfov": 26.84,
   "distance": 100
  }
 ],
 "id": "overlay_B6AAB540_AD5F_F292_419E_419EFF0F435A",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -7.21,
   "hfov": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6C06011_ADEF_32B2_41A3_449ADDC5226A",
   "yaw": -7.21,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.26,
   "hfov": 13.39,
   "distance": 100
  }
 ],
 "id": "overlay_B71BCDB2_AD5F_6DF6_41DA_2BCDF855A422",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 128.38,
   "hfov": 25.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3, this.camera_B9E6B327_AE6F_9E9D_41E3_BA3C7606BE83); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DEA011_ADEF_32B2_41E3_4D94F3263BAE",
   "yaw": 128.38,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.91,
   "hfov": 25.57,
   "distance": 100
  }
 ],
 "id": "overlay_B3E8BFE6_AD57_6D9E_41D4_1333727CA1CE",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -135.89,
   "hfov": 23.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B, this.camera_B9D5C336_AE6F_9EFF_41D1_72EF99352816); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DD2021_ADEF_3292_41E2_459B534BC448",
   "yaw": -135.89,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -39.27,
   "hfov": 23.32,
   "distance": 100
  }
 ],
 "id": "overlay_B3F10228_AD57_7692_41D7_D34BA0EA4B27",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -79.44,
   "hfov": 24.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A, this.camera_B90A3308_AE6F_9E92_41A2_49EF3DE2E9CE); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DDA021_ADEF_3292_41A8_3B9F55F65B69",
   "yaw": -79.44,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.82,
   "hfov": 24.12,
   "distance": 100
  }
 ],
 "id": "overlay_B399E42B_AD57_7296_41E3_C1706E5D1CFC",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 49.02,
   "hfov": 26.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF, this.camera_B9C36346_AE6F_9E9F_41D5_9779E1C38D32); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD4F3BE3_AED1_7596_41DE_3C03B9474574",
   "yaw": 49.02,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.45,
   "hfov": 26.15,
   "distance": 100
  }
 ],
 "id": "overlay_B3A1961F_AD57_7EAE_41B4_008DB454A7E0",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 79.26,
   "hfov": 28.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0, this.camera_B91D42F8_AE6F_9F73_41D0_61064C534051); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD4F7BE4_AED1_7592_41E4_FA79318834F3",
   "yaw": 79.26,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.05,
   "hfov": 28.25,
   "distance": 100
  }
 ],
 "id": "overlay_B30231BE_AD51_F5EE_41E0_F7280A77E254",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 46.99,
   "hfov": 19.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DB0021_ADEF_3292_41CA_66E438752235",
   "yaw": 46.99,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.15,
   "hfov": 19.53,
   "distance": 100
  }
 ],
 "id": "overlay_EB4FE5A3_AD2F_1D96_41B1_D4877F27F450",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_1_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 47.79,
   "hfov": 27.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D, this.camera_B9F90317_AE6F_9EBD_41DB_F69893AA5EC8); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6DB9021_ADEF_3292_41CA_FE615F9679B3",
   "yaw": 47.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.73,
   "hfov": 27.58,
   "distance": 100
  }
 ],
 "id": "overlay_EBDD4E96_AD2F_EFBF_41B0_8C329BCCB4CD",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.33,
   "hfov": 25.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F5884116_AD73_12BE_41E1_6D0DAAE96788",
   "yaw": 0.33,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.91,
   "hfov": 25.57,
   "distance": 100
  }
 ],
 "id": "overlay_E07E7037_ADF1_72FD_41DA_2C27E2EA5D4D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -70.03,
   "hfov": 22.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D, this.camera_B81899D0_AE6F_8DB3_41DC_6C325D0C2774); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F58BC116_AD73_12BE_41E4_031D55D82BD3",
   "yaw": -70.03,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -42.95,
   "hfov": 22.05,
   "distance": 100
  }
 ],
 "id": "overlay_E3BA01BB_ADF1_15F5_41CF_7BEF8B0F8010",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 77.65,
   "hfov": 26.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D, this.camera_B82A3114_AE6F_9AB2_41D8_4653D55E591C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F11AE225_AD51_1692_41D2_FE4DB599D45C",
   "yaw": 77.65,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.05,
   "hfov": 26.34,
   "distance": 100
  }
 ],
 "id": "overlay_FEC36201_AD71_1692_41D0_2B931CAEE04D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -113.39,
   "hfov": 24.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26, this.camera_B813B123_AE6F_9A95_41DB_D2306D2A8964); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F11AB225_AD51_1692_41C6_0162F04C26BB",
   "yaw": -113.39,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36,
   "hfov": 24.37,
   "distance": 100
  }
 ],
 "id": "overlay_FE5F1B74_AD71_3572_41E2_BF1AEB972FFC",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0_HS_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -62.99,
   "hfov": 32.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_0_HS_0_0.png",
      "width": 586,
      "class": "ImageResourceLevel",
      "height": 841
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.73,
   "yaw": -62.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.26,
   "distance": 50
  }
 ],
 "id": "overlay_EB9BF4CA_ADD1_F396_41C7_3C0D819C611F",
 "data": {
  "label": "Entrance "
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 128.79,
   "hfov": 22.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343, this.camera_B857F915_AE6F_8ABD_41B2_F2462E388698); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6FD3030_ADEF_32F2_41E5_98599774278B",
   "yaw": 128.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.91,
   "hfov": 22.77,
   "distance": 100
  }
 ],
 "id": "overlay_E5D3549E_ADD3_73AE_41D6_B585A221A0A8",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 86.65,
   "hfov": 22.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6, this.camera_B8597077_AE6F_9B7D_41AC_0929FA89656E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BCBFE2_ADEF_2D96_4191_F0A7813BF87A",
   "yaw": 86.65,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.91,
   "hfov": 22.77,
   "distance": 100
  }
 ],
 "id": "overlay_B954E5D6_A8CD_CE06_41D0_500B6B2D9642",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -92.53,
   "hfov": 26.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BB1FE2_ADEF_2D96_41AB_44A79789F66B",
   "yaw": -92.53,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.82,
   "hfov": 26.64,
   "distance": 100
  }
 ],
 "id": "overlay_B903812B_A8CD_460F_41C5_DCADA51D404C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -31.98,
   "hfov": 25.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC, this.camera_B4E2DFAC_AE6F_8593_41C7_35C5C7A2ED62); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E6BB5FE2_ADEF_2D96_41B5_3B303914723E",
   "yaw": -31.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.55,
   "hfov": 25.11,
   "distance": 100
  }
 ],
 "id": "overlay_B92BD542_A8CD_4E79_41B4_6AEB54BB0BD5",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -86.19,
   "hfov": 20.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -52.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834, this.camera_B855D058_AE6F_9AB3_41AF_5294BBC7B9BF); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CD417BCA_AED1_7596_41C2_985A53DE6F12",
   "yaw": -86.19,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -52.57,
   "hfov": 20.05,
   "distance": 100
  }
 ],
 "id": "overlay_BAC7896A_A8CD_4609_41E5_0BB3EAA2378A",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "width": 110,
 "class": "Container",
 "right": "0%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "height": 110,
 "gap": 10,
 "borderSize": 0,
 "top": "0%",
 "paddingTop": 0,
 "overflow": "visible",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "paddingLeft": 0,
 "data": {
  "name": "button menu sup"
 }
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "width": "91.304%",
 "class": "Container",
 "right": "0%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "height": "85.959%",
 "paddingTop": 0,
 "bottom": "0%",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "paddingLeft": 0,
 "data": {
  "name": "-button set"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "textShadowVerticalLength": 0,
 "textShadowColor": "#000000",
 "textShadowHorizontalLength": 0,
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 0,
 "horizontalAlign": "left",
 "width": "96.161%",
 "class": "Label",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "text": "Goyal Builders",
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "propagateClick": true,
 "height": 56,
 "fontSize": "69px",
 "borderSize": 0,
 "top": 5,
 "paddingTop": 0,
 "textShadowBlurRadius": 10,
 "fontStyle": "normal",
 "shadow": false,
 "paddingBottom": 0,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "data": {
  "name": "text 1"
 },
 "textShadowOpacity": 1
},
{
 "fontFamily": "Bebas Neue Book",
 "textShadowVerticalLength": 0,
 "textShadowColor": "#000000",
 "textShadowHorizontalLength": 0,
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": 11,
 "horizontalAlign": "left",
 "width": 480,
 "class": "Label",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "text": "Created by virtual creators",
 "verticalAlign": "top",
 "borderRadius": 0,
 "bottom": 22,
 "paddingRight": 0,
 "minWidth": 1,
 "propagateClick": true,
 "height": 46,
 "fontSize": "29px",
 "borderSize": 0,
 "paddingTop": 0,
 "textShadowBlurRadius": 10,
 "fontStyle": "normal",
 "shadow": false,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "data": {
  "name": "text 2"
 },
 "textShadowOpacity": 1
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "horizontalAlign": "center",
 "class": "Image",
 "right": "0%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "propagateClick": true,
 "height": 2,
 "bottom": 53,
 "borderSize": 0,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "data": {
  "name": "white line"
 }
},
{
 "layout": "horizontal",
 "children": [
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "width": 1199,
 "class": "Container",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "bottom": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "height": 51,
 "gap": 3,
 "borderSize": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 30,
 "data": {
  "name": "-button set container"
 }
},
{
 "paddingLeft": 0,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "class": "Container",
 "right": "10%",
 "horizontalAlign": "left",
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "5%",
 "gap": 10,
 "bottom": "5%",
 "borderSize": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Global"
 }
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "class": "Container",
 "right": "10%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "propagateClick": false,
 "minWidth": 1,
 "top": "5%",
 "gap": 10,
 "borderSize": 0,
 "bottom": "80%",
 "overflow": "visible",
 "paddingTop": 20,
 "scrollBarColor": "#000000",
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "paddingLeft": 0,
 "data": {
  "name": "Container X global"
 }
},
{
 "paddingLeft": 0,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "class": "Container",
 "right": "10%",
 "horizontalAlign": "left",
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "5%",
 "gap": 10,
 "bottom": "5%",
 "borderSize": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Global"
 }
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "class": "Container",
 "right": "10%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "propagateClick": false,
 "minWidth": 1,
 "top": "5%",
 "gap": 10,
 "borderSize": 0,
 "bottom": "80%",
 "overflow": "visible",
 "paddingTop": 20,
 "scrollBarColor": "#000000",
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "paddingLeft": 0,
 "data": {
  "name": "Container X global"
 }
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6CCE001_ADEF_3292_41D2_BEB189C278A8",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6CB4001_ADEF_3292_41C8_193CB9456C16",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CBB001_ADEF_3292_41DB_7DC09E6116CF",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CA2001_ADEF_3292_41DF_8DB9899200AD",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CCE001_ADEF_3292_41DE_0C036C35D5D8",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CB7001_ADEF_3292_41C4_5550F729645D",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B03FF1_A8F5_FA1A_41DA_F55CF55D66A9_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6CBB001_ADEF_3292_41D6_6AB9DCA47AFD",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD455BD3_AED1_75B6_41B4_D989375073DD",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B03001_ADEF_3292_41E1_B04DB69BAC28",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DDD27F_A8F7_4A06_41DE_B7C634F00659_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B08001_ADEF_3292_41C1_236B0BFCDBE6",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD53BBF5_AED1_7572_41BC_4A1BE6BAAB3A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E61030_ADEF_32F2_41C4_B4C5B64DB588",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD53FBF5_AED1_7572_41E2_945B2A62E50C",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD53CBF6_AED1_757E_41D1_E20A4E08E1E2",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE9F05_A8CD_DBFA_41E4_191A88998498_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD532BF6_AED1_757E_41DE_8059AD8F038B",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CD0001_ADEF_3292_41CC_9D89AB558AA3",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9D7216A_A8F5_4609_41C3_82B4215E36B2_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CD6001_ADEF_3292_41CC_B2BF19C331DB",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6BD5FE2_ADEF_2D96_41CB_44D4DD564407",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6BD9FE2_ADEF_2D96_41CB_DBFDDFF9472C",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2A84060_A8D5_463A_41E2_7221E6267D9D_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6BDEFE2_ADEF_2D96_41E1_0BC0868EA226",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2B27EF0_A8D5_DA19_41D7_5E2D89EADC26_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD406BC7_AED1_759E_41E4_717D5BB4DC3C",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B7EFF2_ADEF_2D76_4164_8EBBA00AD443",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD477BCE_AED1_75AE_41D1_065BBC62A609",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC62C4_A8F5_4A7A_41D9_87D33EAC5D94_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD475BCE_AED1_75AE_41E3_8692286517CE",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B2A001_ADEF_3292_41DE_2DE2AFD96BB6",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B11001_ADEF_3292_41D3_7F23AFBC235B",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DDEE3E_A8F7_5A06_41DA_190A504CDAD6_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B16001_ADEF_3292_41DE_ECE86522B881",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6DFF011_ADEF_32B2_41D3_E485017A6691",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B25863_A8F5_463E_41D1_8654E0F0E71E_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6DE5011_ADEF_32B2_41D2_028DFF6FE3AB",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD444BD1_AED1_75B2_41D3_9715F9FE759A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD458BD1_AED1_75B2_41D4_3FC2695ABA2A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD45EBD1_AED1_75B2_41DB_6A6CFAFA5A71",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B21FF2_ADEF_2D76_41DE_28881145B79C",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC4A0C_A8F6_DA0A_41B4_8F24D4AEF732_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B24001_ADEF_3292_41B9_E4855D0C1AF8",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D53021_ADEF_3292_41CB_0AA81F1D8751",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D5A021_ADEF_3292_41E0_86D88F02BE0B",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D42021_ADEF_3292_41CE_9078CEFD490A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D4B021_ADEF_3292_41D0_0CDBBE684F75",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D30021_ADEF_3292_41B0_E0D1B11A95B4",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AAEA7B_A8CB_BA0F_41B5_D488324C85A0_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_CD4CEBEB_AED1_7596_41C8_1D4B0E849298",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD499BDC_AED1_75B2_41C4_F0480CA8699E",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C59011_ADEF_32B2_41E0_A506F6EE292E",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C5C011_ADEF_32B2_41D1_01B8E65BE10C",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C42011_ADEF_32B2_41CD_D2739E28C3C8",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C4A011_ADEF_32B2_41C5_066A78979BE4",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B32784_A8F7_4AF9_41DA_41D179C1977A_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD490BDD_AED1_75B2_41D8_5E6759E12F94",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6BA0FE2_ADEF_2D96_41E2_BF7DA1483F25",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6BA5FE2_ADEF_2D96_41D9_E2654A2B1B4C",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6BA9FE2_ADEF_2D96_41D6_E8EF1C656691",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6BB8FE2_ADEF_2D96_41C3_C789697A193F",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9C3F19D_A8CB_460A_41E4_E3BD8B247834_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD46FBCB_AED1_7596_41C3_2853AA6D7124",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6DA0021_ADEF_3292_41E3_D5AF30C24125",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6DA6021_ADEF_3292_41DC_A3B4E6CF1AC0",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6DB7021_ADEF_3292_41B5_FA24C898776E",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6DBE021_ADEF_3292_41D6_1CDDF6E236D8",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD4CDBE6_AED1_759E_41E3_FFF903768E6B",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6DAC021_ADEF_3292_41B8_D31976DB80F3",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB82F8_A8CA_CA0A_419B_766FF6DF86FF_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD4C2BE7_AED1_759E_41C2_CAE5A38F8B5F",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B44FF2_ADEF_2D76_41B6_DD026A745DA4",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC453F_A8F6_CE07_41D1_8ACDC6CDB963_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B4BFF2_ADEF_2D76_41D4_6235AD2518D3",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D9E021_ADEF_3292_41CA_BFCE5BA89F13",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD4C6BE7_AED1_759E_41E4_93FD33E0EDD3",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D8C021_ADEF_3292_41D9_228473843541",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E6D74021_ADEF_3292_41E4_A5DD7C7B7D40",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E6D7A021_ADEF_3292_41DE_E34CCC2E17BD",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D62021_ADEF_3292_41E4_82B37EC8734F",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AB7581_A8CA_CEFB_41E2_70B3EEDF975D_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD4F0BE9_AED1_7592_41D7_D59536D81D06",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CFE001_ADEF_3292_41D3_2CED92C32AF0",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CE5001_ADEF_3292_41C8_8A5A4A8F936F",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B24D7B_A8FA_FE0F_41A9_BFE1767AAE24_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CEA001_ADEF_3292_41E4_29A81242CB87",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D20021_ADEF_3292_41B0_321D2244B766",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D28021_ADEF_3292_41E4_3143852B6F01",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D11021_ADEF_3292_41E4_6080BC9A4BD4",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E6D18021_ADEF_3292_41D3_20114973F480",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AA9FFE_A8CB_BA06_41BF_150FE0BCD4F8_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E6D1E021_ADEF_3292_41C4_B17E8336690F",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CBE001_ADEF_3292_41C8_37A4E64A1300",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CA9011_ADEF_32B2_41D5_CB014B19ECB1",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CAC011_ADEF_32B2_41D0_F89D46BB79B2",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C92011_ADEF_32B2_41E0_E27276ACB326",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C9B011_ADEF_32B2_41A6_A8DB5CA9A364",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD488BD9_AED1_75B2_4198_3C24BF2AC4E5",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B04824_A8F5_463A_41A7_E2D5BF826186_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD48EBD9_AED1_75B2_41E3_B0E9ACC2B725",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6FFD030_ADEF_32F2_41D8_D9C8E4DF6C64",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE7CF7_A8CF_5E07_41D5_652EFA0105E3_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6FE4030_ADEF_32F2_41C6_693BCC6872D4",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B6EFF2_ADEF_2D76_41E4_DB16C0DF78C6",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B52FF2_ADEF_2D76_41BB_2E832F76A891",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B57FF2_ADEF_2D76_41C4_F7A6107D83AF",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DCC762_A8F5_CA3E_41E3_144DE2643196_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6B5CFF2_ADEF_2D76_41A5_CE715EFC673C",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CDC001_ADEF_3292_41DA_432C15C7A335",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CC5001_ADEF_3292_41DA_9BBCA36BEB97",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9D78B96_A8F5_5A19_41C7_8CA6345F0588_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CC9001_ADEF_3292_41C4_2F1DC8DB2BB5",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B41FF2_ADEF_2D76_41E2_B4EA6D2688F9",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B46FF2_ADEF_2D76_41E3_6E8A6953AE17",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC0BA3_A8F5_BA3E_41CD_4AE3CED6BC68_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B4DFF2_ADEF_2D76_4164_97F90AD32575",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6EA9030_ADEF_32F2_41C1_57C23FCB77DB",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E91030_ADEF_32F2_41DF_092854EB34A7",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E99030_ADEF_32F2_41C9_B65D3C0A5D7D",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD521BF3_AED1_7576_41D6_8DA5EBB6E758",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6E88030_ADEF_32F2_41C7_8D0F2B08E5F4",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE8CC8_A8CD_5E0A_41E3_5D776A57E77A_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD525BF4_AED1_7572_41DC_D639CAFB56D7",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B33FF2_ADEF_2D76_41D0_A57ED55CF5B0",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8BC909F_A8F5_4606_41E3_9DD1FE42C966_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B5FFF2_ADEF_2D76_41D8_9671A8DEA5E6",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E0A030_ADEF_32F2_41E2_E025C29EDB8A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B98642EF_A8CF_CA06_41D9_2CE58510E704_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD504BFB_AED1_7576_41DE_0AF644C35C44",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D07021_ADEF_3292_41DE_A9B4E3D19230",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6D0F021_ADEF_3292_41D6_D3D09274A6A9",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6EF7021_ADEF_3292_41D3_29D6F789C2F9",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6EFF021_ADEF_3292_41DB_95D33FF246EC",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A982B8_A8CB_4A0A_41E0_EA66D3D01C25_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6EE7021_ADEF_3292_41CE_D5DF0510D2CF",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9843975_A8CD_461B_41B2_35B5B7794B81_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_E6FCD040_ADEF_3292_41CC_B299282384BC",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C0F011_ADEF_32B2_41C6_AAD77DA80F0A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A946C2_A8F6_CA79_41DB_50E69E1F7F3C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6DF4011_ADEF_32B2_4182_609F0BB33FB5",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E4A030_ADEF_32F2_41DD_5445606214F0",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E33030_ADEF_32F2_41D8_730036779A45",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE7413_A8CD_4E1E_41D8_252AB5281DF4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E3D030_ADEF_32F2_41E3_9F351F1E78B4",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6C8F011_ADEF_32B2_41D1_7A55474564EF",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C76011_ADEF_32B2_41DE_BD5782C4084C",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C7F011_ADEF_32B2_41E1_1546100BDEB9",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD487BDB_AED1_75B6_41D1_00E5E379C47F",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD485BDB_AED1_75B6_41C0_62CF031B7846",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9BE9B7B_A8F6_DA0F_41C2_B69E0B49015B_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD49BBDB_AED1_75B6_41E4_1C018049F0AD",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6FDA030_ADEF_32F2_41E0_F43F52E56F05",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B98EC2D8_A8CE_CA09_41D1_984F7C10E343_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6FC3030_ADEF_32F2_41D4_F16823D39FC7",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6EC8030_ADEF_32F2_41C1_83FE5E20F6A1",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6ECF030_ADEF_32F2_41DC_4F4C114D58DF",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6EB9030_ADEF_32F2_41DA_70F93D95C871",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AE89CE_A8CD_4606_41DC_A24D91BD2193_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6EA1030_ADEF_32F2_41A0_FAF648EE2084",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD496BDD_AED1_75B2_41AC_8A50020BB0EA",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C49011_ADEF_32B2_41E2_6AC839EA1206",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C4F011_ADEF_32B2_41E2_3BFF11F0E5F2",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C37011_ADEF_32B2_41D8_66A609C701CE",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C3D011_ADEF_32B2_41E5_74F59AE67A73",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9BC5D66_A8F7_BE06_41D8_92D3E2DECD6B_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD4EDBDF_AED1_75AE_41C3_DE56FB67CEDD",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E22030_ADEF_32F2_41E0_658D478A5FB7",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AF970C_A8CD_4A09_41BB_C1550FB17AE5_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E2A030_ADEF_32F2_41B8_B3930CD5716F",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E12030_ADEF_32F2_41D9_F6EC6200BD93",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E1A030_ADEF_32F2_41B8_935FBDCDE504",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9B25A24_A8CE_FA39_41B7_C6EB7BD0D1DF_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E02030_ADEF_32F2_41DD_2C5E86D22EC2",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E6B030_ADEF_32F2_41E1_BBEBB92F7051",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6E50030_ADEF_32F2_41D2_8E067F8B78AB",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD535BF7_AED1_757E_41D9_AED4F29621E2",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9AEA179_A8CD_C60B_41B0_54EDCAB490A6_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD50ABF8_AED1_7572_41E3_359CBFD4643C",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6EF5021_ADEF_3292_41DC_C9B5AFD26D06",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6EFD021_ADEF_3292_41D8_A59871DAAE6A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6EE3021_ADEF_3292_41DA_F5C1DD170A98",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6EEB021_ADEF_3292_41D9_9DD34BA45961",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6ED3030_ADEF_32F2_41D3_6F9B25CDBD3B",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6ED8030_ADEF_32F2_41E0_C4241578201C",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A99753_A8CA_CA1F_41C9_398FFBBBD0D3_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD4D5BF1_AED1_7572_41B2_7B880FD531DB",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6BBFFE2_ADEF_2D96_419C_026A0C0AD448",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6BA5FF2_ADEF_2D76_41D1_0E2A3ADF8761",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6BAAFF2_ADEF_2D76_41CC_3302F667222F",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B90FF2_ADEF_2D76_41D2_D566B0DCD04A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B94FF2_ADEF_2D76_41B8_79C26D3DC5F5",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6B98FF2_ADEF_2D76_41E1_F974D7AED82D",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6B9EFF2_ADEF_2D76_41D2_9C6D1E021453",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B89E59C5_A8CA_C67B_41DA_A7093C85F1EC_1_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6B83FF2_ADEF_2D76_41E0_383F3B6FF830",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B88FF2_ADEF_2D76_41D4_86B86B004B19",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B8DFF2_ADEF_2D76_41E2_058038166519",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B72FF2_ADEF_2D76_41BC_A8EEBF0BA5CB",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC4E55_A8F5_5A1B_41E3_A8F4940E3ECB_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B78FF2_ADEF_2D76_41CA_F6760A8AA948",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD418BC9_AED1_7592_41CA_B9CCAF25B0E3",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2BB9750_A8D6_CA1A_41D3_85E20FD40DC6_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CD41EBC9_AED1_7592_41E0_711C4866752A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6B0C001_ADEF_3292_41B4_D33580F697AE",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6CF2001_ADEF_3292_41DC_6484549ABEE0",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8DC5695_A8F7_CA1B_41D7_5ACEE14F16FE_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6CF9001_ADEF_3292_41D5_9B6C304C5DEF",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C2A011_ADEF_32B2_41C2_721C085FCC6A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C13011_ADEF_32B2_41D8_DE74A842889A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C18011_ADEF_32B2_41B4_F72AF24A091B",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6C1F011_ADEF_32B2_41E1_87D213F68CAE",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A963E9_A8F6_CA0B_41D8_4FBAF1C44FD1_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6C06011_ADEF_32B2_41A3_449ADDC5226A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6DEA011_ADEF_32B2_41E3_4D94F3263BAE",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6DD2021_ADEF_3292_41E2_459B534BC448",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6DDA021_ADEF_3292_41A8_3B9F55F65B69",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD4F3BE3_AED1_7596_41DE_3C03B9474574",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_CD4F7BE4_AED1_7592_41E4_FA79318834F3",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6DB0021_ADEF_3292_41CA_66E438752235",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9ABFF73_A8F5_5A1F_41DF_FC41125BF5DD_1_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6DB9021_ADEF_3292_41CA_FE615F9679B3",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_F5884116_AD73_12BE_41E1_6D0DAAE96788",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B98039BC_A8CF_460A_41CD_38C6C876E0AB_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_F58BC116_AD73_12BE_41E4_031D55D82BD3",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_F11AE225_AD51_1692_41D2_FE4DB599D45C",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD81C40B_AD71_1296_41D1_C8889AD718A7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_F11AB225_AD51_1692_41C6_0162F04C26BB",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B981100E_A8CE_C606_41C7_FCDE3B1CBF67_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6FD3030_ADEF_32F2_41E5_98599774278B",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6BCBFE2_ADEF_2D96_4191_F0A7813BF87A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6BB1FE2_ADEF_2D96_41AB_44A79789F66B",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6BB5FE2_ADEF_2D96_41B5_3B303914723E",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2B9BBAD_A8D6_DA0A_41D8_FCE7B5941C8E_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_CD417BCA_AED1_7596_41C2_985A53DE6F12",
 "rowCount": 6
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "horizontalAlign": "center",
 "width": 60,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "propagateClick": true,
 "height": 60,
 "mode": "toggle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "image button menu"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "horizontalAlign": "center",
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "height": 58,
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "click": "this.shareTwitter(window.location.href)",
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "horizontalAlign": "center",
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "height": 58,
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "click": "this.shareFacebook(window.location.href)",
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "layout": "horizontal",
 "fontFamily": "Montserrat",
 "backgroundColorDirection": "vertical",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "horizontalAlign": "center",
 "width": 90,
 "class": "Button",
 "shadowColor": "#000000",
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "shadowSpread": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "minWidth": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "height": 40,
 "fontSize": 12,
 "mode": "push",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "LOCATION",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "gap": 5,
 "fontStyle": "normal",
 "paddingBottom": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "shadow": false,
 "iconWidth": 32,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button location"
 },
 "pressedBackgroundOpacity": 1
},
{
 "layout": "horizontal",
 "fontFamily": "Montserrat",
 "backgroundColorDirection": "vertical",
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "horizontalAlign": "center",
 "width": 90,
 "class": "Button",
 "shadowColor": "#000000",
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "shadowSpread": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "minWidth": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "height": 40,
 "fontSize": 12,
 "mode": "push",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "REALTOR",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "gap": 5,
 "fontStyle": "normal",
 "paddingBottom": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "shadow": false,
 "iconWidth": 32,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button realtor"
 },
 "pressedBackgroundOpacity": 1
},
{
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "class": "Container",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "contentOpaque": false,
 "width": "85%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "overflow": "scroll",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "paddingLeft": 0,
 "data": {
  "name": "-left"
 }
},
{
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "class": "Container",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "contentOpaque": false,
 "width": "15%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 50,
 "minWidth": 400,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 20,
 "overflow": "visible",
 "paddingBottom": 20,
 "scrollBarColor": "#0069A3",
 "shadow": false,
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "paddingLeft": 50,
 "data": {
  "name": "-right"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "horizontalAlign": "center",
 "width": "25%",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "height": "75%",
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "mode": "push",
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "X"
 }
},
{
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "class": "Container",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "contentOpaque": false,
 "width": "55%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "overflow": "scroll",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "paddingLeft": 0,
 "data": {
  "name": "-left"
 }
},
{
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "class": "Container",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "contentOpaque": false,
 "width": "45%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 60,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 20,
 "overflow": "visible",
 "paddingBottom": 20,
 "scrollBarColor": "#0069A3",
 "shadow": false,
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "paddingLeft": 60,
 "data": {
  "name": "-right"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "horizontalAlign": "center",
 "width": "25%",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "height": "75%",
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "mode": "push",
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "X"
 }
},
{
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "minHeight": 0,
 "contentOpaque": false,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "gap": 0,
 "borderSize": 0,
 "height": 60,
 "paddingTop": 20,
 "overflow": "scroll",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "minHeight": 520,
 "contentOpaque": false,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "overflow": "scroll",
 "paddingBottom": 30,
 "scrollBarColor": "#E73B2C",
 "shadow": false,
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "paddingLeft": 0,
 "data": {
  "name": "Container text"
 }
},
{
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "width": 370,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "height": 40,
 "paddingTop": 0,
 "overflow": "scroll",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "100%",
 "class": "Image",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "verticalAlign": "bottom",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "data": {
  "name": "Image"
 }
},
{
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "minHeight": 0,
 "contentOpaque": false,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "gap": 0,
 "borderSize": 0,
 "height": 60,
 "paddingTop": 20,
 "overflow": "scroll",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "minHeight": 520,
 "contentOpaque": false,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "overflow": "scroll",
 "paddingBottom": 30,
 "scrollBarColor": "#E73B2C",
 "shadow": false,
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "paddingLeft": 0,
 "data": {
  "name": "Container text"
 }
},
{
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "width": 370,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "height": 40,
 "paddingTop": 0,
 "overflow": "scroll",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.63vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.47vh;font-family:'Bebas Neue Bold';\">Location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.32vh;font-family:'Bebas Neue Bold';\">S-87, </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.32vh;font-family:'Bebas Neue Bold';\">Greater Kailash II, </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.32vh;font-family:'Bebas Neue Bold';\">New Delhi, Delhi.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "paddingBottom": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "data": {
  "name": "HTMLText"
 }
},
{
 "layout": "horizontal",
 "fontFamily": "Bebas Neue Bold",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "horizontalAlign": "center",
 "width": 207,
 "class": "Button",
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "minHeight": 1,
 "shadowSpread": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 1,
 "fontSize": 34,
 "label": "lorem ipsum",
 "iconHeight": 32,
 "mode": "push",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 1,
 "height": 59,
 "gap": 5,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "paddingBottom": 0,
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button"
 },
 "pressedBackgroundOpacity": 1
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "height": "45%",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.63vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.8vh;font-family:'Bebas Neue Bold';\">Real Estate Builder </SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "paddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "children": [
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "contentOpaque": false,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "80%",
 "paddingTop": 0,
 "overflow": "scroll",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "paddingLeft": 0,
 "data": {
  "name": "- content"
 }
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarMargin": 2,
 "width": "75%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.32vh;font-family:'Bebas Neue Bold';\">Jk Builders </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.32vh;font-family:'Bebas Neue Bold';\">Munish Goyal </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.82vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Bebas Neue Bold';\">Ph. no. 9810626078</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "paddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "overflow": "visible",
 "mobileMipmappingEnabled": false,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "layout": "absolute",
 "paddingLeft": 0,
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
