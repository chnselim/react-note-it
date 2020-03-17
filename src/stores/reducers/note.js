const initialNotes = [
  {
    id: '1',
    title: 'New Note 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et efficitur urna. Aliquam sagittis lectus felis, ac venenatis odio dignissim sed. Pellentesque ultrices nisl nec rhoncus ornare. In hac habitasse platea dictumst. Nullam id feugiat velit. Integer fringilla ut massa eget aliquam. Suspendisse nunc lacus, pretium ut erat non, ultrices tincidunt purus. Nulla euismod quis risus sed porta. Cras hendrerit dui in dolor rutrum, vitae suscipit odio cursus. Etiam ac justo eget dui feugiat sollicitudin. Quisque non nibh nec sem cursus sodales nec et erat. In vel laoreet ligula. Aenean faucibus bibendum lacus quis placerat.\n' +
      '\n' +
      'Curabitur placerat eros neque, non eleifend velit ullamcorper id. Aenean eu felis id nulla laoreet sollicitudin. Curabitur tempus sem velit. Donec sed risus non tortor tempus pulvinar. Morbi fringilla est felis, ut tempor sapien mattis vitae. Praesent vehicula lobortis metus quis mollis. Mauris posuere pellentesque rhoncus. Nam massa est, aliquam vel hendrerit in, semper tempor mauris. Nam cursus, eros sit amet imperdiet dignissim, mauris justo aliquet nibh, eu viverra nisi felis eget massa. Vestibulum imperdiet lorem in mauris egestas, in malesuada velit euismod. Mauris congue, nibh vel volutpat iaculis, velit sem accumsan sem, eu commodo sapien tortor et eros. Vivamus vulputate eu nunc a efficitur.',
    updatedAt: Date.now(),
    createdAt: Date.now(),
  },
  {
    id: '2',
    title: 'New Note 2',
    content: 'Phasellus venenatis vel erat a blandit. Phasellus nec sollicitudin eros. Morbi euismod faucibus facilisis. Aenean id orci ante. Donec pharetra euismod augue, in finibus sem iaculis eget. Maecenas porta nisi a augue elementum ultrices. Cras fermentum mauris elit, facilisis pretium quam venenatis sed. Nam scelerisque diam egestas lobortis aliquet. Nam aliquam velit a lobortis ullamcorper. Nullam convallis velit sed dui lobortis consectetur. Cras eros nisi, congue vitae quam id, consequat iaculis ante. Cras non lorem luctus sapien fringilla aliquam quis sit amet lectus.\n' +
      '\n' +
      'Nulla vitae mattis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet nulla enim. Etiam at feugiat quam. Maecenas dictum diam lorem, vitae varius nunc lacinia sed. Aliquam id congue sem. Fusce eu turpis semper, porttitor augue sed, egestas turpis.',
    updatedAt: Date.now() + 100,
    createdAt: Date.now() + 100,
  },
];

const initialState = {
  notes: initialNotes,
};

export default function note(state = initialState, action) {
  switch (action.type) {
    case 'ADD': {
      return { ...state };
    }
    default:
      return state;
  }
}
