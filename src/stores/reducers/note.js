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
    content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse maximus sollicitudin leo non fringilla. Nam ut pharetra justo. Donec convallis eu mi vitae semper. Aliquam blandit varius quam in tincidunt. Maecenas vel iaculis erat. Morbi facilisis purus et purus aliquam, nec dictum lectus consequat. Duis tempor a velit sit amet gravida. Mauris lobortis rutrum mi vel blandit. Suspendisse mollis varius magna, vel lacinia arcu suscipit cursus. Nunc quis nisi magna. Phasellus maximus, nisl sit amet elementum gravida, purus nisi molestie nunc, ut feugiat arcu lectus sit amet sem. Fusce non sapien et dui hendrerit tristique. Cras facilisis leo ut dapibus rhoncus. Pellentesque a nibh libero.\n' +
      '\n' +
      'Vivamus vel lobortis dui. Praesent gravida tellus ligula, non fermentum nibh porttitor eu. Donec aliquet dolor magna, sed interdum augue semper vel. Donec malesuada elit sem, vel consectetur neque porttitor pretium. Donec auctor eleifend dolor eget accumsan. Phasellus at ipsum in enim molestie scelerisque. Integer varius augue ut odio congue, ut porta enim ultrices.\n' +
      '\n' +
      'Sed viverra, libero at maximus convallis, nunc felis suscipit tellus, id pretium magna ex a odio. Sed ut turpis posuere, euismod ante nec, cursus eros. Nullam tempus diam eget est pharetra, sed facilisis diam tincidunt. Integer faucibus congue lorem. Suspendisse potenti. Sed sed volutpat tellus, quis iaculis nisl. Nunc lacinia magna orci, eget condimentum massa dignissim vehicula.\n' +
      '\n' +
      'Vestibulum a tellus tempor, ornare felis ac, tempor turpis. Duis molestie nibh vel diam ornare, sed congue augue dictum. Donec sed vulputate lectus, eget condimentum mi. Fusce vel tortor nec enim cursus commodo. Etiam rhoncus vitae mi id bibendum. Cras sed diam quis lacus dapibus vestibulum. Vestibulum iaculis vel neque sed pellentesque. Cras vel pharetra ipsum, at congue ipsum. Nunc elementum magna vitae justo tincidunt bibendum. Donec non urna volutpat, posuere massa sit amet, sollicitudin risus. Aenean pellentesque condimentum tincidunt. Maecenas quam lacus, vestibulum a maximus eu, mollis nec erat. Nullam mauris libero, luctus non dictum ut, pulvinar eget leo.\n' +
      '\n' +
      'Cras a ligula dictum, dignissim elit ac, viverra velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin et accumsan augue, sit amet mollis quam. Cras posuere eros eget odio feugiat fringilla. Curabitur venenatis dictum ipsum in pellentesque. Mauris nec libero sit amet urna tincidunt ultricies nec non ex. Mauris congue, elit a congue mattis, eros dolor ornare magna, vel aliquet tellus augue vitae ipsum. Aliquam eu sodales lectus. Vivamus risus libero, dapibus quis dolor eu, efficitur suscipit felis. Nulla sed maximus lorem, ac dignissim nibh. Curabitur non imperdiet massa. Cras rutrum congue neque non iaculis.\n' +
      '\n' +
      'Vestibulum urna velit, consectetur vel purus nec, dictum tincidunt justo. Cras consectetur non risus non feugiat. Fusce aliquam ante vel ante vulputate, vitae commodo libero faucibus. Morbi at volutpat eros, sed aliquam orci. Aliquam scelerisque consequat tellus, id consectetur nibh accumsan at. Aenean eros diam, interdum id nibh id, ultrices aliquet urna. Nam dolor massa, tempus ut nulla quis, porttitor sodales libero.\n' +
      '\n' +
      'Suspendisse consectetur, libero at tincidunt mollis, sem dui interdum purus, at ultrices enim velit nec diam. Maecenas sem ligula, euismod quis augue vitae, aliquam lobortis felis. Donec elementum pharetra tempus. Sed consectetur accumsan arcu ut gravida. Praesent dolor sem, ornare ut nunc eu, feugiat facilisis dui. Vestibulum tempor ornare magna id ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum feugiat eros vel accumsan. Vestibulum faucibus purus ac nisi condimentum tincidunt. Sed pellentesque tempus augue ut mollis. Duis condimentum orci justo, nec accumsan sem rhoncus et. Donec luctus urna sem, rhoncus auctor leo tristique eu. Nullam ultrices sem a tellus convallis tristique. Nam vitae convallis ante.\n' +
      '\n' +
      'Mauris maximus quis justo eget pulvinar. Aliquam vel diam dui. Etiam sodales odio est, et vulputate erat lacinia ut. Ut ut ultricies enim. Sed in ultrices purus. Suspendisse efficitur dictum mauris at suscipit. Nam ac pharetra risus. In rutrum metus in massa viverra, a volutpat nisl posuere. Vivamus auctor vulputate augue at sollicitudin. Nulla libero eros, mollis eget mattis sit amet, consequat non enim. Suspendisse tempus sit amet purus et volutpat. Nulla facilisi.\n' +
      '\n' +
      'Nunc ultricies nunc at elit fermentum consectetur. Nullam dapibus lorem et nunc rutrum finibus. Duis vulputate facilisis lectus at varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec mattis ornare lectus ut rutrum. Mauris mollis ligula sit amet quam dapibus, tristique ultrices metus vulputate. Pellentesque condimentum ornare risus sed consectetur. Praesent posuere dignissim eros, id maximus nulla lacinia ac. Suspendisse egestas vel leo eget dignissim. Integer dignissim fermentum ornare. Mauris ultricies felis et neque porta commodo. Sed eu libero justo.\n' +
      '\n' +
      'Sed non varius odio. Integer eget nisi bibendum, commodo velit eu, accumsan lacus. Nam suscipit ex quam. Phasellus varius et sem nec porta. Sed feugiat ante nec lacus semper tincidunt. Sed tincidunt nunc arcu, eget pharetra felis venenatis non. Vivamus quis dapibus orci, vitae porta purus. Vivamus at eros ullamcorper, pulvinar purus eleifend, hendrerit libero. Nullam id urna finibus, sagittis lorem id, interdum nibh. Aliquam erat volutpat. Maecenas eu urna tempor diam efficitur semper. Suspendisse lacinia aliquam dapibus. Nam varius justo a turpis volutpat dignissim.\n' +
      '\n' +
      'Nullam consectetur ligula at sodales malesuada. Donec rutrum eros magna, hendrerit faucibus ante porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In nisl nibh, aliquam et pretium vitae, aliquet sed erat. Nulla sagittis ante lectus, sit amet malesuada eros vestibulum nec. Nulla dictum, tellus at condimentum tristique, quam metus vulputate felis, a tempor nisl mi eu arcu. Nam vel mauris ipsum. Nunc orci neque, tristique in dolor in, posuere tempor lorem. Integer ornare eros ut semper ultricies. Maecenas ultrices sapien tortor. Nam blandit iaculis posuere. Fusce a eros urna. Nam tortor dui, mollis quis nulla ac, dapibus ullamcorper elit. Nunc et lobortis massa, ac faucibus sem. Donec tincidunt ullamcorper augue, id suscipit neque sollicitudin ut.',
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
