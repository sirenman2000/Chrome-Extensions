// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.windows.getAll( null, function( windowList )
	{
		var winLength = windowList.length;
		
		for( var i=0; i<winLength; i++ )
		{
			var winId = windowList[i].id;
		
			chrome.tabs.getAllInWindow( winId, function( tabList )
			{
				var tabLength = tabList.length;
				
				for( var j=0; j<tabLength; j++ )
				{
					var tabUrl = tabList[j].url;
					var tabId = tabList[j].id;
					
					chrome.tabs.reload( tabId );
				}
			});
		}
	});
	
});