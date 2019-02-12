//Handles on mouse up events
function mouseUp()
{
	try{
		//debugger;
		//debugger;
		if (oElement && isInputValid(sRefElement)) {
			//Check if the element need to be added or note
			if(oElement.style.color=="green")
			{
				var sElementName = oElement.name;
				var oRefElement = document.getElementById(sRefElement);
				var iRowToInsert = prompt("Please enter number of "+sElementName+" row(s) to insert", 1);
				if(iRowToInsert==null)
				{
					oElement.style.position = 'static';
					oElement.onmousemove = null;		
				}else{
					//Create a progress bar to show number of rows being inserted and show when each row has been inserted
					var oProgBar = oDoc.createProgressBar((iRowToInsert>1?"Inserting rows":"Inserting a row"),iRowToInsert,1)
					//if(!oRefElement)	
					for(var x=1;x<=iRowToInsert;x++)
					{
						//Create an element to add to the html for each new row
						var node=document.createElement("LI");					
						//Give it a label
						var textnode=document.createTextNode(sElementName);
						//Attach the text to the node
						node.appendChild(textnode);
						//set onclick event
						node.setAttribute("onclick","gotoSection(this);highlightElement(this)");
						node.onclick = function() { gotoSection();highlightElement();  };
						
						//Make the new item cold to make it stand ouot and easier to find as well as get the users attention
						node.style.fontWeight="bold";
						//Get the element to insert after
                        var oRefParent = oRefElement.parentNode;	
						//Get the name of the table to insert the new row in
						var sTableToInsertIn = oRefElement.tablename;
					
						var sRowType = oElement.rowtype;
						var sRowTypeDesc = getRowTypeDesc(sRowType);
						var sTableName = oRefElement.tablename;

						var sTableType = "";
						var sTableTypeDesc = "";//getTableTypeDesc(sTableType);
						
						/*var oTable = oDoc.tableByName(sTableToInsertOn);
						if(oTable)
						{						
							var sTableType = "";
							var sTableTypeDesc = getTableTypeDesc(sTableType);
						}*/
						
						node.setAttribute("mapcolumn",oRefElement.mapcolumn);
						node.setAttribute("tablename",sTableName);
						node.setAttribute("jumpcode",oRefElement.jumpcode);
						node.setAttribute("objecttype","row");
						node.setAttribute("title","Component: Table row\nRow type: "+sRowType+"\nRow type desc: "+sRowTypeDesc+"\nTable name: "+sTableName+"\nTable type: "+sTableType+"\nTable desc: "+sTableTypeDesc);						
						node.setAttribute("add","true");
						
						//insert the new element in the html dialog
						//var oNewElement = oRefParent.insertBefore(textnode,oRefElement);
						var oNewElement = oRefParent.insertBefore(node,oRefElement);
						//get rid of the on mouse move event
						//document.detachEvent("onmousemove", onMouseMove);
						oElement.onmousemove = null;
						oElement.style.position = 'static';						
						//Get the name of the table to insert the new row in
						/*var sTableToInsertOn = oRefElement.tablename;
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
						}*/
						
						//oElement.style.position = 'static';
						oProgBar.updateProgress(1);	
						oProgBar.setMessage("Row "+x+" / "+iRowToInsert);						
					}
					//Destroy the progress bar
					oProgBar.destroyProgressBar();
					//reload controls on the UI to keep HTML and CV in synch 
					onLoad();
				}
			}
		}
	}catch(e)
	{
		logError(e);
	}finally{
		if(oElement)
		{
			oElement.style.color="";
			oElement.style.position = 'static';			
			oElement.onmousemove = null;
			oElement.onmouseup = null;
		}
		if(oRefElement)
		{
			oRefElement.style.textDecoration = "none";
		}
		oElement = null;
		oRefElement=null;		
	}
}

function updateCurrentSelection(oCurrentElement)
{
	try{
		//debugger;
		//debugger;
		var sId = "";
		//Get the component type
		sObjectType = oCurrentElement.objecttype;
		switch(sObjectType)
		{
			case "section":
				sId = oCurrentElement.jumpcode;
				sCurrentTable = "";	
				break;
			case "row":
				sId = oCurrentElement.guid;
				sCurrentTable = oCurrentElement.tablename;
				break;
			default:
		}
		sCurrentlyElementSelected = sId;
	}catch(e)
	{
		logError(e);
	}finally
	{
		oElement = null;
	}
}


function deleteItem()
{
	try{
		//debugger;
		//debugger;
		var bResult = false;
		var iSelectedItems = aSelectedItems.length;
		//Check if multiple items need to be deleted
		if(iSelectedItems==0){
			alert("You have not selected any item!");
			return;
		}else if(iSelectedItems>1){
			//Iif deleting multiple items ask
			bResult = confirm("Are you sure you want to delete these "+iSelectedItems+" items?");
		}else if(iSelectedItems==1)
		{
			//if deleting a single item do not ask
			bResult = true;
		}
		
		if(bResult){
			var oProgBar = oDoc.createProgressBar("Deleting...",iSelectedItems,1);
			for(var i=0;i<iSelectedItems;i++)
			{
				var oElementToDelete = aSelectedItems[i];
				if(oElementToDelete && oElementToDelete.getAttribute("isheader")=="true")
				{	
					var sIdOfElementToDelete = oElementToDelete.getAttribute("id").split("_")[1];
					var oParentElementToDelFrom = document.getElementById(sIdOfElementToDelete).parentNode;//.id
					if(isInputValid(oParentElementToDelFrom))
					{
						//oParentElementToDelFrom.removeChild(document.getElementById(sIdOfElementToDelete));
						document.getElementById(sIdOfElementToDelete).style.display="none";
						//Set an attribute to show that it needs to be deleted
						document.getElementById(sIdOfElementToDelete).setAttribute("delete","true");
						
					}
				}
				else if(oElementToDelete && oElementToDelete.getAttribute("ismainsection")=="true"){
					//if main section destroy the whole structure
					var oContainer = document.getElementById("MainContentContainer");
					//oContainer.innerHTML = "";
					oElementToDelete.parentNode.style.display="none";
					//Set an attribute to show that it needs to be deleted
					oElementToDelete.parentNode.setAttribute("delete","true");
				}
				else if(isInputValid(oElementToDelete))
				{
					var oParentElementToDelFrom = oElementToDelete.parentNode;
					if(isInputValid(oParentElementToDelFrom))
					{
						//oParentElementToDelFrom.removeChild(oElementToDelete);
						oElementToDelete.style.display="none";
						//Set an attribute to show that it needs to be deleted
						oElementToDelete.setAttribute("delete","true");						
					}
				}
				oProgBar.updateProgress(1);	
			}
			oProgBar.destroyProgressBar();
			aSelectedItems = [];			
		}else{
			return;
		}
		
		return;
		onLoad();
		//Clear the editor pane
		//document.getElementById("editorPane").innerHTML = "";		
		
		
		/*else if(aSelectedItems.length==1)
		{
			var oObjectType = aSelectedItems[0];
			var sObjectType = oObjectType.getAttribute("objecttype");
			switch(sObjectType)
			{				
				case "row":
					
					var oRowElement = document.getElementById("row_"+sCurrentlyElementSelected);
					if(oRowElement)
					{*/
						/*var sGuid  = sCurrentlyElementSelected;
						var sTable = oRowElement.tablename;
						var oProgBar = oDoc.createProgressBar("Deleting row",1,1);
						deleteRow(sTable,sGuid);
						oProgBar.updateProgress(1);	
						oProgBar.destroyProgressBar();*/
		/*			}
					bResult = confirm("Are you sure you want to delete this/these "+aSelectedItems.length+" item(s)?");
					break;
				case "section":*/
					/*var oSectionToDelete = oDoc.sectionByName(sCurrentlyElementSelected);
					if(oSectionToDelete)
					{
						var oProgBar = oDoc.createProgressBar("Deleting section",1,1);
						oDoc.removeSectionAndContent(oSectionToDelete.index);
						oProgBar.updateProgress(1);	
						oProgBar.destroyProgressBar();						
					}*/
					/*break;
			}			
		}
		else if(aSelectedItems.length>1){
			//alert("You have not selected any item!");
			bResult = confirm("Are you sure you want to delete this/these "+aSelectedItems.length+" item(s)?");
		}*/
		//return;
		if(bResult){
	
			switch(sObjectType)
			{				
				case "row":
					var oRowElement = document.getElementById("row_"+sCurrentlyElementSelected);
					if(oRowElement)
					{
						var sGuid  = sCurrentlyElementSelected;
						var sTable = oRowElement.tablename;
						var oProgBar = oDoc.createProgressBar("Deleting row",1,1);
						deleteRow(sTable,sGuid);
						oProgBar.updateProgress(1);	
						oProgBar.destroyProgressBar();
					}
					break;
				case "section":
					var oSectionToDelete = oDoc.sectionByName(sCurrentlyElementSelected);
					if(oSectionToDelete)
					{
						var oProgBar = oDoc.createProgressBar("Deleting section",1,1);
						oDoc.removeSectionAndContent(oSectionToDelete.index);
						oProgBar.updateProgress(1);	
						oProgBar.destroyProgressBar();						
					}
					break;
			}			
		}else{
			return;
		}
		onLoad();
		//Clear the editor pane
		document.getElementById("editorPane").innerHTML = "";
		
	}catch(e)
	{
		alert(e.description);
		//logError(e);
	}finally
	{
		
	}	
}


function deleteItemOld()
{
	try{
		var bResult = confirm("Delete current selection?");
		if(bResult){
	
			switch(sObjectType)
			{				
				case "row":
					var oRowElement = document.getElementById("row_"+sCurrentlyElementSelected);
					if(oRowElement)
					{
						var sGuid  = sCurrentlyElementSelected;
						var sTable = oRowElement.tablename;
						var oProgBar = oDoc.createProgressBar("Deleting row",1,1);
						deleteRow(sTable,sGuid);
						oProgBar.updateProgress(1);	
						oProgBar.destroyProgressBar();
					}
				case "section":
					var oSectionToDelete = oDoc.sectionByName(sCurrentlyElementSelected);
					if(oSectionToDelete)
					{
						var oProgBar = oDoc.createProgressBar("Deleting section",1,1);
						oDoc.removeSectionAndContent(oSectionToDelete.index);
						oProgBar.updateProgress(1);	
						oProgBar.destroyProgressBar();						
					}
				break;
			}			
		}else{
			return;
		}
		onLoad();
		//Clear the editor pane
		document.getElementById("editorPane").innerHTML = "";
		
	}catch(e)
	{
		logError(e);
	}finally
	{
		
	}	
}

function saveProject()
{
	try{
		
		debugger;
		debugger;
		
		//var sContent = document.getElementById("MainContentContainer").innerHTML;
		//Save as html file
		var sPath = oDoc.interpret("clntdir()") + "\\AuthToolProject.html";
		//var sPath = "C:\\AuthToolProject.html"
		var sContent = document.documentElement.outerHTML;
		createTextFile(sPath,sContent);
	}catch(e)
	{
		logError(e);
	}finally{
		
	}
}

function createTextFile(sPath,sContent)
{
	
	var ofso = new ActiveXObject("Scripting.FileSystemObject");
	if(ofso.FileExists(sPath)==true){
		var ofile = ofso.OpenTextFile(sPath, 2, true)
	}else{
		
		ofile = ofso.CreateTextFile(sPath, 2, true)
	}
	
	if(ofile)
	{
		ofile.writeline(sContent);
	}
}

function getElementsByClassName1(node, classname) 
{
    var a = [];
    var re = new RegExp('(^| )'+classname+'( |$)');
    var els = node.getElementsByTagName("*");
    for(var i=0,j=els.length; i<j; i++)
        if(re.test(els[i].className))a.push(els[i]);
    return a;
}