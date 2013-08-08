Template.postItem.helpers(
  ownPost: ()->
    return this.userId == Meteor.userId()

  domain: ()->
    a = document.createElement('a')
    a.href = this.url
    return a.hostname
  upvotedClass: ()->
    userId = Meteor.userId()
    if userId and not _.include(@upvoters, userId)
      'btn-primary upvoteable'
    else
      'disabled'
)

Template.postItem.events(
  'click .upvoteable': (e)->
    e.preventDefault()
    Meteor.call('upvote', @_id)
)

Template.postItem.rendered = ()->
  instance = this
  rank = instance.data._rank
  $this = $(@firstNode)
  postHeight = 80
  newPosition = rank * postHeight

  if typeof(instance.currentPosition) isnt undefined
    previousPosition = instance.currentPosition
    delta = previousPosition - newPosition
    $this.css('top', delta + 'px')
  else
    $this.addClass('invisible')

  Meteor.defer ()->
    instance.currentPosition = newPosition
    $this.css('top', '0px').removeClass('invisible')
