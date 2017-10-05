'use strict'

function openView (event) {
  // Get all elements with class="viewcontent" and hide them
  console.log(event.target)
  const viewName = $(event.target).attr('data-id')
  console.log(viewName)
  const viewcontent = document.getElementsByClassName('viewcontent')
  for (let i = 0; i < viewcontent.length; i++) {
    viewcontent[i].style.display = 'none'
  }

  // Get all elements with class="navlinks" and remove the class "active"
  const navlinks = document.getElementsByClassName('navlinks')
  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].className = navlinks[i].className.replace(' active', '')
  }

  // Show the current view, and add an "active" class to the button that opened the tab
  document.getElementById(viewName).style.display = 'block'
  event.currentTarget.className += ' active'
  console.log('assign active className to navbar item')
}

module.exports = {
  openView
}
