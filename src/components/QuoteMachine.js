import React from 'react'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardActions } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <Card>
    <CardContent>
      <Typography id="text">
        {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        id="new-quote"
        color="primary"
        variant="contained"
        size="small"
        onClick={assignNewQuoteIndex}
      >
        New Quote
      </Button>
      <IconButton
        id="tweet-quote"
        target="_blank"
        href={`http://twitter.com/intent/tweet?text=${selectedQuote.quote}%0A%2D${selectedQuote.author}`}
      >
        <FontAwesomeIcon icon={faTwitter} size="sm"></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
)

export default QuoteMachine
