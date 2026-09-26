import test from 'node:test';
import assert from 'node:assert/strict';
import { getCourseSearchGroups } from '../lib/content.ts';

test('matches design-related queries to Design courses', () => {
  const groups = getCourseSearchGroups('design');
  assert.ok(groups.some((group) => group.name === 'Design'));
  assert.ok(groups.some((group) => group.name === 'Design' && group.courses.some((course) => /ui\/ux|graphic|web design/i.test(course.title))));
});

test('matches data-related queries to Data courses', () => {
  const groups = getCourseSearchGroups('data analysis');
  assert.ok(groups.some((group) => /data/i.test(group.name)));
});

test('matches ict basics queries to ICT basics courses', () => {
  const groups = getCourseSearchGroups('ict basics');
  assert.ok(groups.some((group) => /ict basics/i.test(group.name)));
});

test('includes AI and project management course groups', () => {
  const groups = getCourseSearchGroups('ai prompt engineering');
  const projectGroups = getCourseSearchGroups('project management');

  assert.ok(groups.some((group) => /ai/i.test(group.name)));
  assert.ok(projectGroups.some((group) => /project management/i.test(group.name)));
});
