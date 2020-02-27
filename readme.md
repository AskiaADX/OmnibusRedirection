# OmnibusRedirection
   
Manage the redirection to child surveys for omnibus projects

## WARNING

This ADC entirely hide all elements on the page and avoid the page to be visible.

## How to use

Create a routing `Query Web Service` that starts the child survey using the` DoExternalPanel`  action.
Set the response of this routing into the open-ended question associated with the current ADC.

Create a single closed question with one `Completed` response with importation of internet parameter to be able to modify his state externally.
Then associate this question with the current ADC using the property `Question with completed state`.
Until this `Completed` response of this question is not set, the current ADC will always redirect to the child survey, otherwise it will move to the next question.
