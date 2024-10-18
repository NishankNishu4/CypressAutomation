Feature: Testing buying mobiles websites

@Regression
Scenario: User adds items to card and complete checkout process
Given  user navigates to Shopping website 
When add items to cart and proceed to checkout page 
| Name | Gender |
| Nishank | Male |

When  validate total amount value equals individual amount addition
Then enters country and validate success message 