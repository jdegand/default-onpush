# Default Onpush

[Angular Challenges](https://github.com/tomalaforge/angular-challenges) #34 Default vs OnPush

## Built With

- [Angular](https://angular.io)
- [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Directions

In this challenge, we will explore the differences and impacts of using ChangeDetectionStrategy.Default versus ChangeDetectionStrategy.OnPush. To provide a clearer demonstration, I have added color enlightment to each component and each row in our application. However, in real-world scenarios, you will not have such visualization. This is where the [Angular DevTools profiler](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) comes to the rescue.

### Statement

The goal of this challenge is to improve the clustering of change detection within the application.

## Thoughts

- Adding ChangeDetection.onPush seemed to help limit MatFormField from re-rendering but PersonListComponent was unaffected.
- PersonListComponent is the one changing the most.  
- I took the gap after `<app-random>` in app.component as a hint as to where an input component should go. 

```html

    <app-random />
  
    <div class="flex">
      <app-person-list [names]="girlList" title="Female" />
      <app-person-list [names]="boyList" title="Male" />
    </div>
```

## Useful Resources

- [byby](https://byby.dev/at-rule-tailwind) - @tailwind workarounds 
