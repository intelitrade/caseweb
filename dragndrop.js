
	//var oElement;
	/*var oRefElement;
	var sRefElement = "";
	var sAction = "";
	var sCurrentSelection = "";*/
	function getTheElementsPosition(oParentNode,oElement)
	{
		try{
			var iParentNode = oParentNode.children.length;
			for(var i=0;i<iParentNode;i++)
			{
				if(oElement===oParentNode.children[i])
				{
					iPos = i;
					break;
				}
			}
			return iPos;
		}catch(e)
		{
			logError(e);
		}
	}

	function oMouseUpXX(oElement)
	{
		debugger;
		debugger;
		//document.detachEvent("onmousemove", onMouseMove);
		oElement.style.position = 'static';
	}
	
	function onMouseDown(oElement)
	{
		return;
		var oParentNode = oElement.parentNode;
		iPos = getTheElementsPosition(oParentNode,oElement);

		// (4) onmouseup, remove unneeded handlers
		oElement.onmouseup = function() {
			//debugger;
			//debugger;
			if(document.removeEventListener)
			{ 
				document.removeEventListener('mousemove', onMouseMove);
				//oElement.style.position = 'static';
			}else
			{
				document.detachEvent("onmousemove", onMouseMove);
				document.detachEvent("onmousedown", onMouseDown);
				//oParentNode.appendChild(oElement);			
				//oElement.style.position = 'static';
				/*oElement.onmousemove = null;
				oElement.onmouseup = null;*/
				
			};
			if(oElement)
			{
				oElement.style.position = 'static';
				oElement = null;
			}
		}					
		//var oClone = oElement.cloneNode(true);
		//oParentNode.insertBefore(oClone,oElement);
		//debugger;
		//debugger;
		//r//eturn;
		// (1) start the process
		// (2) prepare to moving: make absolute and on top by z-index
		oElement.style.position = 'absolute';
		oElement.style.zIndex = 1000;
		// ...and put that absolutely positioned element under the cursor
		oElement.onmousemove = function ()
		{
			//moveAt(event.pageX, event.pageY);
			moveAt(event.clientX, event.clientY);
		}
		
		// (4) onmouseup, remove unneeded handlers
		/*oElement.onmouseup = function() {
			if(document.removeEventListener)
			{ 
				document.removeEventListener('mousemove', onMouseMove);
			}else
			{
				document.detachEvent("onmousemove", onMouseMove);
				oElement.style.position = 'static';
				oElement.onmousemove = null;
				oElement.onmouseup = null;
			};
		}*/					
		
		// centers the oElement at (pageX, pageY) coordinates
		function moveAt(pageX, pageY){
			if(oElement)
			{	
				oElement.style.left = pageX - oElement.offsetWidth / 2 + 'px';
				oElement.style.top = pageY - oElement.offsetHeight / 2 + 'px';
				//document.getElementById("target").innerHTML = "X Coord = "+pageX+ "  Y Coord= "+pageY+" screen width= "+document.documentElement.clientWidth+" screen heght= "+document.documentElement.clientHeight+" Percentag="+((pageX/document.documentElement.clientWidth)*100)+" Percentag="+((pageY/document.documentElement.clientHeight)*100);;
				
				if(((pageX/document.documentElement.clientWidth)*100)>95&&((pageY/document.documentElement.clientHeight)*100)<10){
					
					var bResult = confirm("Would you like to delete this element?");
					if(bResult){
						//debugger;
						//debugger;
						document.detachEvent("onmousemove", onMouseMove);
						//oElement.onmousemove = null;
						//oElement.onmouseup = null;
						
						//Get the name of the table the element belongs to & the row number
						var sTable = oElement.getAttribute("tablename");
						//Row number no longer being used, instead using GUID to find the right component
						//var sRow = oElement.getAttribute("rownumber");
						var sGuid = oElement.getAttribute("guid");
						oParentNode.removeChild(oElement);
						oElement = null;
						//deleteRow(sTable,parseInt(sRow));
						deleteRow(sTable,sGuid);
						//Clear the editor pane
						document.getElementById("editorPane").innerHTML = "";						
					}else{
						//debugger;
						//debugger;
						//document.detachEvent("onmousemove", onMouseMove);
						/*oElement.onmousemove = null;
						oElement.onmouseup = null;
						*/
						//oElement.style.position = 'static';
						//oElement = null;
					}
				}
			}
		}	
		
		function onMouseMove(event) {
			moveAt(event.clientX, event.clientY);
		}

		if(document.addEventListener)
		{ 
			document.addEventListener('mousemove', onMouseMove);
		}else
		{
			document.attachEvent("onmousemove", onMouseMove);		
		}	
	}

	
	//function onMouseDown2(oElement)
	function onMouseDown2(sId)
	{
		//debugger;
		//debugger;
		event.cancelBubble = true;
		oElement = document.getElementById(sId);
		var oParentNode = oElement.parentNode;
		iPos = getTheElementsPosition(oParentNode,oElement);
		//debugger;
		//debugger;
		//Get original settigs of the element before moving it around
		var iOriginalZIndex = oElement.style.zIndex;
		var iElementLeft = oElement.style.left;
		var iElementTop = oElement.style.top;
		
		// (4) onmouseup, remove unneeded handlers
		oElement.onmouseup = function() {
			debugger;
			debugger;
			if(document.removeEventListener)
			{ 
				document.removeEventListener('mousemove', onMouseMove);
			}else
			{
				iPos = getTheElementsPosition(oParentNode,oElement);
				//document.detachEvent("onmousemove", onMouseMove);
				//oParentNode.appendChild(oElement);
				//Replace original settigs of the element
				oElement.style.left = iElementLeft;
				oElement.style.top = iElementTop;
				oElement.style.position = 'static';
				oElement.style.zIndex = iOriginalZIndex;
				document.detachEvent("onmousemove", onMouseMove);
				oElement.onmousemove = null;
				//oElement.onmouseup = null;
			};
			
			//document.getElementById("results").innerHTML = event.type+" - Has been added";	
		}		
		// (1) start the process
		// (2) prepare to moving: make absolute and on top by z-index
		oElement.style.position = 'absolute';
		oElement.style.zIndex = 1000;
		// ...and put that absolutely positioned element under the cursor
		oElement.onmousemove = function ()
		{
			//moveAt(event.pageX, event.pageY);
			moveAt(event.clientX, event.clientY);
			//debugger;
			//debugger;
		}			
		
		// centers the oElement at (pageX, pageY) coordinates
		function moveAt(pageX, pageY){
			if(oElement)
			{	
				oElement.style.left = pageX - oElement.offsetWidth + 'px';
				oElement.style.top = pageY - oElement.offsetHeight + 'px';//- oElement.offsetHeight + 'px';			
				//oElement.style.left = pageX - oElement.offsetWidth + 'px';
				//oElement.style.top = pageY - oElement.offsetHeight + 'px';				
				//oElement.style.left = pageX - oElement.offsetWidth / 1 + 'px';
				//oElement.style.top = pageY - oElement.offsetHeight / 1 + 'px';
				oRefElement = document.elementFromPoint(event.clientX, event.clientY);
				if(oRefElement)
				{
					var sElementId = oRefElement.id;
					var sElementName = oElement.name;
					
					//document.getElementById("results").innerHTML = oElement.style.left;	
					if(sElementId!="" && typeof(sElementId)!="undedined" && sElementId!=null && sElementId.search("row_")!=-1)
					{						
						//debugger;
						//debugger;						
						/*var oRefParent = oRefElement.parentNode;
						var iParentNode = oRefParent.children.length;
						
						for(var i=0;i<iParentNode;i++)
						{
							//oParentNode.children[i].style.border="";
							try{
								var sChildId = oRefParent.children[i].id;
								if(sChildId.search("row_")!=-1)
								{
									oRefParent.children[i].style.textDecoration = "none";	
								}								
							}catch(e)
							{
							}
						}
						oRefElement.style.textDecoration = "underline";	
						*/
						//oElement.setAttribute("refelement", sElementId);
						sRefElement = sElementId;
						oElement.style.color="green";
						var oRefParent = oRefElement.parentNode;
						var iParentNode = oRefParent.children.length;
						
						for(var i=0;i<iParentNode;i++)
						{
							//oParentNode.children[i].style.border="";
							try{
								var sChildId = oRefParent.children[i].id;
								if(sChildId.search("row_")!=-1)
								{
									oRefParent.children[i].style.textDecoration = "none";	
								}								
							}catch(e)
							{
							}
						}
						oRefElement.style.textDecoration = "underline";					
						/*
						//Ask the user how any rows they want to add
						var iRowToInsert = prompt("Please enter number of "+sElementName+" row(s) to insert", 1);
						if(iRowToInsert==null)
						{
							oElement.style.position = 'static';
							document.detachEvent("onmousemove", onMouseMove);
							oElement.onmousemove = null;
							oElement.onmouseup = null;
							return;
						}
						//Create a progress bar to show number of rows being inserted and show when each row has been inserted
						var oProgBar = oDoc.createProgressBar((iRowToInsert>1?"Inserting rows":"Inserting a row"),iRowToInsert,1)
						for(var x=1;x<=iRowToInsert;x++)
						{
							//Create an element to add to the html for each new row
							var node=document.createElement("LI");
							
							//Give it a label
							var textnode=document.createTextNode(sElementName);
							//Get the element to insert after
							var oRefParent = oRefElement.parentNode;	
							//insert the new element in the html dialog
							var oNewElement = oRefParent.insertBefore(textnode,oRefElement);
							//get rid of the on mouse move event
							document.detachEvent("onmousemove", onMouseMove);
							oElement.style.position = 'static';						
							//Get the name of the table to insert the new row in
							var sTableToInsertOn = oRefElement.tablename;
							//Get the GUID for the row to insert after in CaseView (this will help get the precise row - do not use row numbers, very unreliabble
							var sRowGuidOfRefRow = oRefElement.id.split("row_")[1];
							//debugger;
							//debugger;
							//Get the postion of the ref row based on GUID
							var iRefRow = getRowRefPositionBasedOnGuid(sTableToInsertOn,sRowGuidOfRefRow);
							if(iRefRow===9999999999)
								return;
							
							var sRowType = oElement.rowtype;
							//Call the function to insert the row
							insertNewRow(sTableToInsertOn,sRowType,parseInt(iRefRow));
							
							//Get thet able
							var oTable = oDoc.tableByName(sTableToInsertOn);
							if(oTable)
							{
								//get the new row
								var oRow = oTable.getRow(parseInt(iRefRow)+1);
								//if the new row has no GUID add a guid to it
								if(oRow && oRow.propExists("GUID")!=1)
								{
									//Create a GUID
									var ID = createGuid();
									//Add it to the row custom property
									oRow.propSet("GUID",ID);
									//Update the desciption cell
									//Get the description column
									var oCustTable = new oTableCustomProp(sTableToInsertOn,oDoc);
									var aDescCol = oCustTable.getColWithProp(CCOLTYPE,DESC_COL);
									var sDescCol = aDescCol[0];
									var sDescCell = sTableToInsertOn+"."+sDescCol+(parseInt(iRefRow)+1);
									var oDescCell = oDoc.cell(sDescCell);
									if(oDescCell)
									{
										if(oDescCell.value==="")
											oDescCell.value = sElementName;
									}															
								}
							}
							
							oElement.style.position = 'static';
							oElement.onmousemove = null;
							oElement.onmouseup = null;	
							oProgBar.updateProgress(1);	
							oProgBar.setMessage("Row "+x+" / "+iRowToInsert);						
						}
						//Destroy the progress bar
						oProgBar.destroyProgressBar();
						//reload controls on the UI to keep HTML and CV in synch 
						onLoad();*/
					}else{
						oElement.style.color="red";
					}
				}

				return;
				var oRefElement = document.elementFromPoint(event.clientX, event.clientY);
				if(oRefElement)
				{
					var sElementId = oRefElement.id;
					var sElementName = oElement.name;
					if(sElementId!="" && typeof(sElementId)!="undedined" && sElementId!=null && sElementId.search("row_")!=-1)
					{						
						debugger;
						debugger;						
						//var oRefParent = oRefElement.parentNode;
						//var iParentNode = oRefParent.children.length;
						/*
						for(var i=0;i<iParentNode;i++)
						{
							//oParentNode.children[i].style.border="";
							try{
								var sChildId = oRefParent.children[i].id;
								if(sChildId.search("row_")!=-1)
								{
									oRefParent.children[i].style.textDecoration = "none";	
								}								
							}catch(e)
							{
							}
						}
						oRefElement.style.textDecoration = "underline";
						*/
						var node=document.createElement("LI");
						
						var textnode=document.createTextNode(sElementName);
						var oRefParent = oRefElement.parentNode;	

						var oNewElement = oRefParent.insertBefore(textnode,oRefElement);
						
						document.detachEvent("onmousemove", onMouseMove);
						oElement.style.position = 'static';						
						var sTableToInsertOn = oRefElement.tablename;
						var sRowGuidOfRefRow = oRefElement.id.split("row_")[1];
						//debugger;
						//debugger;
						//Get the postion of the ref row based on GUID
						var iRefRow = getRowRefPositionBasedOnGuid(sTableToInsertOn,sRowGuidOfRefRow);
						if(iRefRow===9999999999)
							return;
						
						var sRowType = oElement.rowtype;
						insertNewRow(sTableToInsertOn,sRowType,parseInt(iRefRow));
						
						var oTable = oDoc.tableByName(sTableToInsertOn);
						if(oTable)
						{
							var oRow = oTable.getRow(parseInt(iRefRow)+1);
							if(oRow && oRow.propExists("GUID")!=1)
							{
								var ID = createGuid();
								oRow.propSet("GUID",ID);
								//debugger;
								//debugger;
								//Update the desciption cell
								//Get the description column
								var oCustTable = new oTableCustomProp(sTableToInsertOn,oDoc);
								var aDescCol = oCustTable.getColWithProp(CCOLTYPE,DESC_COL);
								var sDescCol = aDescCol[0];
								var sDescCell = sTableToInsertOn+"."+sDescCol+(parseInt(iRefRow)+1);
								var oDescCell = oDoc.cell(sDescCell);
								if(oDescCell)
								{
									if(oDescCell.value==="")
										oDescCell.value = sElementName;
								}															
							}
						}
						
						oElement.style.position = 'static';
						oElement.onmousemove = null;
						oElement.onmouseup = null;	

						var all = document.getElementsByTagName("*");

						for (var i=0, max=all.length; i < max; i++) {
							 // Do something with the element here
							 try{
								all[i].onmouseup = null;
								all[i].onmousedown = null;
								all[i].onmousemove = null;
							}catch(e)
							{
								
							}
						}
						/*
						
							loop(document);
							function loop(node){
								// do some thing with the node here
								var nodes = node.childNodes;
								for (var i = 0; i <nodes.length; i++){
									if(!nodes[i]){
										continue;
									}

									if(nodes[i].childNodes.length > 0){
										loop(nodes[i]);
									}
								}						
						
						*/
						//document.getElementById("results").innerHTML = sElementId +" - Has been added";
						//reload controls on the UI to keep HTML and CV in synch 
						onLoad();
					}
				}
			}
		}	
		
		function onMouseMove(event) {
			moveAt(event.clientX, event.clientY);
		}

		if(document.addEventListener)
		{ 
			document.addEventListener('mousemove', onMouseMove);
		}else
		{
			document.attachEvent("onmousemove", onMouseMove);		
		}	
	}	
	
	
	function insertNewRow(sTable,sRowType,iInsertAfterRow)
	{
		try
		{
			// Find row number based on row type
			var aTable = sTable.split("|");
			if (aTable.length == 2)
			{
				sTable = aTable[0];
				var sPageName = aTable[1];
			}

			var oTable = oDoc.tableByName(sTable);
			var oTableCust = new oTableCustomProp(sTable,oDoc);
			var sTableType = oTableCust.getTableProp(CTABLETYPE);

			var oAutoCopy = oDoc.copyText();
			var iTable = oAutoCopy.tableCount();
			var iRowInserted = 0;

			if (iTable>0)
			{
				for (var i=1;i<=iTable;i++)
				{
					var oTableFreeze = oAutoCopy.tableByIndex(i);
					if (oTableFreeze)
					{
						var sTableFreeze = oTableFreeze.getLabel();
						var oTableCustProp = new oTableCustomProp(sTableFreeze,oAutoCopy);
						var sTableTypeFreeze = oTableCustProp.getTableProp(CTABLETYPE);
						//check for a matching table type
						if (sTableType==sTableTypeFreeze)
						{
							var aRow = oTableCustProp.getRowWithProp(CROWTYPE,sRowType);
							if (typeof(aRow)!="undefined")
							{
								if (aRow.length > 0)
								{
									var iCopyRow = aRow[0]+1;
									iInsertAfterRow = parseInt(iInsertAfterRow)+1;
									iRet = oDoc.autoTableInsert(sTableFreeze, sTable, iInsertAfterRow, iCopyRow, iCopyRow, 0, 0, 1, 1);
									iRowInserted = 1;
									break;
								}
							}
						}
					}
				}
			}

			//if the the table type and row to copy from in the autocopy does not exist insert row from the table itself
			if (iRowInserted==0)
			{
				// Find row number based on row type
				var oTableProps = new oTableCustomProp(sTable);
				var iRow = oTableProps.getRowWithProp(CROWTYPE,sRowType)[0];
				var oTable = oDoc.tableByName(sTable);
				if (iRow)
				{
				// Insert after the specified row
					oTable.insertRowAfter(iInsertAfterRow,1,iRow);
					
				}
			}
			//Section below is not being executed - sPageName not being passed in
			//Check if the new row inserted has the correct stylesheet
			var oSection = oDoc.sectionByName(sPageName);
			if(oSection)
			{
				UpdateSectionStyleSheetLib(oSection,sPageName);
			}
			oDoc.recalculate(iRecalculateValue);
		}
		catch(e)
		{
			logError(e);
		}
	}

	function getRowRefPositionBasedOnGuid(sTable,sGUID)
	{
		try{
			var iRefRow = 9999999999;
			var oTable = oDoc.tableByName(sTable);
			if(oTable)
			{
				//loop through the table rows until you find the correct row with the guid
				var iRows = oTable.nRows();
				for(var i=1;i<=iRows;i++)
				{
					var oRow = oTable.getRow(i);
					if(oRow.propGet("GUID")===sGUID)
					{
						iRefRow = i;
						break;
					}
				}
			}

			return iRefRow;
		}catch(e)
		{
			logError(e);
		}finally{
			
		}
	}
	
	//delete row in CaseView
	function deleteRow(sTable,sGUID)
	{
		try{
			var oTable = oDoc.tableByName(sTable);
			if(oTable)
			{
				//loop through the table rows until you find the correct row with the guid
				var iRows = oTable.nRows();
				for(var i=1;i<=iRows;i++)
				{
					var oRow = oTable.getRow(i);
					if(oRow.propGet("GUID")===sGUID)
					{
						oTable.removeRow(i, 1);
						//oDoc.recalculate(0);
						break;
					}
				}
			}
		}catch(e)
		{
			logError(e);
		}finally{
			oTable = null;
		}
	}