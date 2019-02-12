
try{
	//Check version of internet explorer running
	var iIEVer = checkIEVer();
	if(iIEVer == 0) 
	{
		alert(sIEInfo);
		window.close();
    }
	
	var sMappingHTML = "";

	function keyDown() {
		//executed when a key has been pressed
		var iKeyCode = event.keyCode
		//Check if enter key was pressed
		if (iKeyCode == 13) 
		{
			okButtonClick();
		}

		//check if ecape key has been pressed
		if (iKeyCode == 27) {
			cancelButtonClick();
		}
	}

	function ApplyButtonClick()
	{
		try{
			oDoc.recalculate(0);	
		}catch(e)
		{
			logError(e);
		}
	}

	
	function getRowNumber(oTable,sGiud,sGUIDID)
	{
		try{
			var iRows = oTable.nRows();
			var iRow = 0;
			for(var i=1;i<=iRows;i++)
			{
				var oRow = oTable.getRow(i);
				if(isInputValid(sGUIDID)!=""){
					if(oRow.propGet("TEMPGUID")===sGiud)
					{
						iRow = i;
						break;
					}
				}else{
					if(oRow.propGet("GUID")===sGiud)
					{
						iRow = i;
						break;
					}					
				}
			}
			return iRow;
		}catch(e)
		{
			logError(e);
		}finally{
			oTable = null;
		}
	}
	
	function updateMapNo(oElement)
	{
		try{
			//debugger;
			//debugger;
			var sCellToUpdate = oElement.id;
			var oMappingCell = oDoc.cell(sCellToUpdate)
			if(oMappingCell)
			{
				oMappingCell.value = oElement.value;
				//get the description cell and remove overridden if it is there
				var sDescCell = oElement.getAttribute("desccell");
				var oCell = oDoc.cell(sDescCell);
				if(oCell)
				{
					oCell.overridden = 0;
					//oElement.innerText=oCell.value;

				}
				//MFG.D14
				oDoc.recalculate(0);
				//Update description on UI
				var oSrcElement = document.getElementById(oElement.srcelement);
				if(oSrcElement)
				{
					oSrcElement.innerHTML="["+oDoc.cell(sDescCell).value+"]";
					//Reload preview pane to have the right properties displaying, otherwise some fields will show wrong data
					updatePreviewPane(oSrcElement);
				}
			}
			
		}catch(e)
		{
			logError(e);
		}finally{
			oElement = null;
		}
	}

	function updateDescCell(oElement)
	{
		try{
			var sDescCell = oElement.getAttribute("desccell");
			oDescCell = oDoc.cell(sDescCell);
			if(oDescCell)
			{
				oDescCell.value = oElement.value;
				oDoc.recalculate(0);
				//Update description on UI
				var oSrcElement = document.getElementById(oElement.srcelement);
				if(oSrcElement)
				{
					oSrcElement.innerHTML="["+oDoc.cell(sDescCell).value+"]";
					//Reload preview pane to have the right properties displaying, otherwise some fields will show wrong data
					updatePreviewPane(oSrcElement);
				}
			}
		}catch(e)
		{
			logError(e);
		}finally{
			oElement = null;
		}
	}
	
	function updateColDesc(sCellName,oElement)
	{
		try{
			var oCell = oDoc.cell(sCellName);
			if(oCell)
			{
				oCell.calculation = '"'+oElement.value+'"';
			}
			oDoc.recalculate(0);
		}catch(e)
		{
			logError(e);
		}finally{
			oElement = null;
			oCell = null;
		}
	}
	
	function getNoteNumRef()
	{
		try{
			
		}catch(e){
			
		}finally{
		}
	}
		
	function okButtonClick()
	{
		try{
			clearAllHighlighting();
			window.close();
		}catch(e)
		{
			logError(e);
		}
	}

	//Event handler (Keyboard)
	document.onkeydown = keyDown
}catch(e)
{
	
}
