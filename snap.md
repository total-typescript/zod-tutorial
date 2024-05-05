# Root TSConfig Snapshot

```txt
,src/02-object.problem.ts(16,10): error TS18046: 'parsedData' is of type 'unknown'.
src/03-array.problem.ts(20,10): error TS18046: 'parsedData' is of type 'unknown'.
src/04-infer.problem.ts(15,3): error TS18046: 'data' is of type 'unknown'.
src/04-infer.problem.ts(15,21): error TS7006: Parameter 'person' implicitly has an 'any' type.
src/13-lazy.problem.ts(6,7): error TS7022: 'MenuItem' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
src/13-lazy.problem.ts(10,21): error TS2448: Block-scoped variable 'MenuItem' used before its declaration.
src/14-generics.problem.ts(26,12): error TS2344: Type 'false' does not satisfy the constraint 'true'.
,
```



# Vitest Snapshot

```json
{
  "success": false,
  "testResults": [
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should throw a runtime error when called with not a number",
          "status": "failed",
          "title": "Should throw a runtime error when called with not a number",
          "failureMessages": [
            "expected [Function] to throw an error"
          ],
          "location": {
            "line": 14,
            "column": 33
          }
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should return a string when called with a number",
          "status": "passed",
          "title": "Should return a string when called with a number",
          "failureMessages": []
        }
      ],
      "status": "failed",
      "message": "",
      "name": "src/01-number.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should throw a runtime error when called with not a number",
          "status": "passed",
          "title": "Should throw a runtime error when called with not a number",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should return a string when called with a number",
          "status": "passed",
          "title": "Should return a string when called with a number",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/01-number.solution.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should return the name",
          "status": "passed",
          "title": "Should return the name",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/02-object.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should return the name",
          "status": "passed",
          "title": "Should return the name",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/02-object.solution.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should return the name",
          "status": "failed",
          "title": "Should return the name",
          "failureMessages": [
            "expected { name: 'Luke Skywalker', …(15) } to deeply equal { name: 'Luke Skywalker' }"
          ],
          "location": {
            "line": 26,
            "column": 44
          }
        }
      ],
      "status": "failed",
      "message": "",
      "name": "src/03-array.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should return the name",
          "status": "passed",
          "title": "Should return the name",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/03-array.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-infer.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-infer.solution.1.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-infer.solution.2.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should validate correct inputs",
          "status": "failed",
          "title": "Should validate correct inputs",
          "failureMessages": [
            "expected [Function] to not throw an error but '[\\n  {\\n    \"code\": \"invalid_type\",\\n…' was thrown"
          ],
          "location": {
            "line": 25,
            "column": 9
          }
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should throw when you do not include the name",
          "status": "passed",
          "title": "Should throw when you do not include the name",
          "failureMessages": []
        }
      ],
      "status": "failed",
      "message": "",
      "name": "src/05-optional.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should validate correct inputs",
          "status": "passed",
          "title": "Should validate correct inputs",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should throw when you do not include the name",
          "status": "passed",
          "title": "Should throw when you do not include the name",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/05-optional.solution.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should include keywords if passed",
          "status": "passed",
          "title": "Should include keywords if passed",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should automatically add keywords if none are passed",
          "status": "failed",
          "title": "Should automatically add keywords if none are passed",
          "failureMessages": [
            "expected undefined to deeply equal []"
          ],
          "location": {
            "line": 34,
            "column": 27
          }
        }
      ],
      "status": "failed",
      "message": "",
      "name": "src/06-default.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should include keywords if passed",
          "status": "passed",
          "title": "Should include keywords if passed",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should automatically add keywords if none are passed",
          "status": "passed",
          "title": "Should automatically add keywords if none are passed",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/06-default.solution.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should fail if an invalid privacyLevel passed",
          "status": "failed",
          "title": "Should fail if an invalid privacyLevel passed",
          "failureMessages": [
            "expected [Function] to throw an error"
          ],
          "location": {
            "line": 26,
            "column": 5
          }
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should permit valid privacy levels",
          "status": "passed",
          "title": "Should permit valid privacy levels",
          "failureMessages": []
        }
      ],
      "status": "failed",
      "message": "",
      "name": "src/07-union.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should fail if an invalid privacyLevel passed",
          "status": "passed",
          "title": "Should fail if an invalid privacyLevel passed",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should permit valid privacy levels",
          "status": "passed",
          "title": "Should permit valid privacy levels",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/07-union.solution.1.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should fail if an invalid privacyLevel passed",
          "status": "passed",
          "title": "Should fail if an invalid privacyLevel passed",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should permit valid privacy levels",
          "status": "passed",
          "title": "Should permit valid privacy levels",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/07-union.solution.2.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should fail if you pass a phone number with too few characters",
          "status": "failed",
          "title": "Should fail if you pass a phone number with too few characters",
          "failureMessages": [
            "expected [Function] to throw an error"
          ],
          "location": {
            "line": 32,
            "column": 5
          }
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should fail if you pass a phone number with too many characters",
          "status": "failed",
          "title": "Should fail if you pass a phone number with too many characters",
          "failureMessages": [
            "expected [Function] to throw an error"
          ],
          "location": {
            "line": 42,
            "column": 5
          }
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should throw when you pass an invalid email",
          "status": "failed",
          "title": "Should throw when you pass an invalid email",
          "failureMessages": [
            "expected [Function] to throw an error"
          ],
          "location": {
            "line": 51,
            "column": 5
          }
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should throw when you pass an invalid website URL",
          "status": "failed",
          "title": "Should throw when you pass an invalid website URL",
          "failureMessages": [
            "expected [Function] to throw an error"
          ],
          "location": {
            "line": 61,
            "column": 5
          }
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should pass when you pass a valid website URL",
          "status": "passed",
          "title": "Should pass when you pass a valid website URL",
          "failureMessages": []
        }
      ],
      "status": "failed",
      "message": "",
      "name": "src/08-validations.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should fail if you pass a phone number with too few characters",
          "status": "passed",
          "title": "Should fail if you pass a phone number with too few characters",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should fail if you pass a phone number with too many characters",
          "status": "passed",
          "title": "Should fail if you pass a phone number with too many characters",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should throw when you pass an invalid email",
          "status": "passed",
          "title": "Should throw when you pass an invalid email",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should throw when you pass an invalid website URL",
          "status": "passed",
          "title": "Should throw when you pass an invalid website URL",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should pass when you pass a valid website URL",
          "status": "passed",
          "title": "Should pass when you pass a valid website URL",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/08-validations.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/09-composing-objects.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/09-composing-objects.solution.1.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/09-composing-objects.solution.2.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/09-composing-objects.solution.3.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should resolve the name and nameAsArray",
          "status": "failed",
          "title": "Should resolve the name and nameAsArray",
          "failureMessages": [
            "expected { name: 'Luke Skywalker' } to deeply equal { name: 'Luke Skywalker', …(1) }"
          ],
          "location": {
            "line": 28,
            "column": 44
          }
        }
      ],
      "status": "failed",
      "message": "",
      "name": "src/10-transform.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should resolve the name and nameAsArray",
          "status": "passed",
          "title": "Should resolve the name and nameAsArray",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/10-transform.solution.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should error if the passwords are not the same",
          "status": "failed",
          "title": "Should error if the passwords are not the same",
          "failureMessages": [
            "expected [Function] to throw an error"
          ],
          "location": {
            "line": 26,
            "column": 5
          }
        }
      ],
      "status": "failed",
      "message": "",
      "name": "src/11-refine.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should error if the passwords are not the same",
          "status": "passed",
          "title": "Should error if the passwords are not the same",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/11-refine.solution.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should fail if the star wars person does not exist",
          "status": "failed",
          "title": "Should fail if the star wars person does not exist",
          "failureMessages": [
            "promise resolved \"{ id: '123123123123123123' }\" instead of rejecting"
          ],
          "location": {
            "line": 37,
            "column": 3
          }
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should succeed if the star wars person does exist",
          "status": "passed",
          "title": "Should succeed if the star wars person does exist",
          "failureMessages": []
        }
      ],
      "status": "failed",
      "message": "",
      "name": "src/12-async-refine.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should fail if the star wars person does not exist",
          "status": "passed",
          "title": "Should fail if the star wars person does not exist",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should succeed if the star wars person does exist",
          "status": "passed",
          "title": "Should succeed if the star wars person does exist",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/12-async-refine.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot access 'MenuItem' before initialization",
      "name": "src/13-lazy.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should succeed when it encounters a correct structure",
          "status": "passed",
          "title": "Should succeed when it encounters a correct structure",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should error when it encounters an incorrect structure",
          "status": "passed",
          "title": "Should error when it encounters an incorrect structure",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/13-lazy.solution.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should fetch from the Star Wars API",
          "status": "passed",
          "title": "Should fetch from the Star Wars API",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/14-generics.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should fetch from the Star Wars API",
          "status": "passed",
          "title": "Should fetch from the Star Wars API",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/14-generics.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/helpers/type-utils.ts"
    }
  ]
}
```