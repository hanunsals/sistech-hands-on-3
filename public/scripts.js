function blurImage(element) {
    element.querySelector('img').classList.add('blur');
  }
  
  function unblurImage(element) {
    element.querySelector('img').classList.remove('blur');
  }
  
  function changeStatus(button, status) {
    var row = button.parentNode.parentNode;
    var statusCell = row.querySelector('.status');
    statusCell.innerText = status;
    if (status === 'Accepted') {
      statusCell.classList.remove('rejected');
      statusCell.classList.add('accepted');
      row.querySelector('.acceptButton').style.backgroundColor = '#315E99';
      row.querySelector('.rejectButton').style.backgroundColor = '';
      row.querySelector('.acceptButton').style.color = 'white';
      row.querySelector('.rejectButton').style.color = '';
    } else if (status === 'Rejected') {
      statusCell.classList.remove('accepted');
      statusCell.classList.add('rejected');
      row.querySelector('.rejectButton').style.backgroundColor = '#9095A0';
      row.querySelector('.acceptButton').style.backgroundColor = '';
      row.querySelector('.rejectButton').style.color = 'white';
      row.querySelector('.acceptButton').style.color = '';
    }
  }
  